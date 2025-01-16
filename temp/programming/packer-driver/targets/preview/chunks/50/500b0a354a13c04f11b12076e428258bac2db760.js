System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, dynamicAtlasManager, _crd, RoundBoxAssembler;

  function _reportPossibleCrUseOfRoundBoxSprite(extras) {
    _reporterNs.report("RoundBoxSprite", "./RoundBoxSprite", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      dynamicAtlasManager = _cc.dynamicAtlasManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4056amywFCfI5N5uk1/R96", "RoundBoxAssembler", undefined);

      __checkObsolete__(['IAssembler', 'IRenderData', 'RenderData', 'dynamicAtlasManager']);

      _export("RoundBoxAssembler", RoundBoxAssembler = {
        // 根据圆角segments参数，构造网格的顶点索引列表
        GetIndexBuffer(sprite) {
          var indexBuffer = [0, 1, 2, 2, 3, 0, 4, 5, 6, 6, 7, 4, 8, 9, 10, 10, 11, 8]; // 为四个角的扇形push进索引值

          var index = 12;

          var fanIndexBuild = function fanIndexBuild(center, start, end) {
            var last = start;

            for (var i = 0; i < sprite.segments - 1; i++) {
              // 左上角 p2为扇形圆心，p1/p5为两个边界
              var cur = index;
              index++;
              indexBuffer.push(center, last, cur);
              last = cur;
            }

            indexBuffer.push(center, last, end);
          };

          if (sprite.leftBottom) fanIndexBuild(3, 4, 0);
          if (sprite.leftTop) fanIndexBuild(2, 1, 5);
          if (sprite.rightTop) fanIndexBuild(9, 6, 10);
          if (sprite.rightBottom) fanIndexBuild(8, 11, 7);
          return indexBuffer;
        },

        createData(sprite) {
          var renderData = sprite.requestRenderData();
          var corner = 0;
          corner += sprite.leftBottom ? 1 : 0;
          corner += sprite.leftTop ? 1 : 0;
          corner += sprite.rightTop ? 1 : 0;
          corner += sprite.rightBottom ? 1 : 0;
          var vNum = 12 + (sprite.segments - 1) * corner;
          renderData.dataLength = vNum;
          renderData.resize(vNum, 18 + sprite.segments * 3 * corner);
          var indexBuffer = RoundBoxAssembler.GetIndexBuffer(sprite);
          renderData.chunk.setIndexBuffer(indexBuffer);
          return renderData;
        },

        // 照抄simple的
        updateRenderData(sprite) {
          var frame = sprite.spriteFrame;
          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          this.updateUVs(sprite); // dirty need
          //this.updateColor(sprite);// dirty need

          var renderData = sprite.renderData;

          if (renderData && frame) {
            if (renderData.vertDirty) {
              this.updateVertexData(sprite);
            }

            renderData.updateRenderData(sprite, frame);
          }
        },

        // 局部坐标转世界坐标 照抄的，不用改
        updateWorldVerts(sprite, chunk) {
          var renderData = sprite.renderData;
          var vData = chunk.vb;
          var dataList = renderData.data;
          var node = sprite.node;
          var m = node.worldMatrix;
          var stride = renderData.floatStride;
          var offset = 0;
          var length = dataList.length;

          for (var i = 0; i < length; i++) {
            var curData = dataList[i];
            var x = curData.x;
            var y = curData.y;
            var rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            offset = i * stride;
            vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
          }
        },

        // 每帧调用的，把数据和到一整个meshbuffer里
        fillBuffers(sprite) {
          if (sprite === null) {
            return;
          }

          var renderData = sprite.renderData;
          var chunk = renderData.chunk;

          if (sprite.node.hasChangedFlags || renderData.vertDirty) {
            // const vb = chunk.vertexAccessor.getVertexBuffer(chunk.bufferId);
            this.updateWorldVerts(sprite, chunk);
            renderData.vertDirty = false;
          } // quick version


          var bid = chunk.bufferId;
          var vidOrigin = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          var vid = vidOrigin; // 沿着当前这个位置往后将我们这个对象的index放进去

          var indexBuffer = RoundBoxAssembler.GetIndexBuffer(sprite);

          for (var i = 0; i < renderData.indexCount; i++) {
            ib[indexOffset++] = vid + indexBuffer[i];
          }

          meshBuffer.indexOffset += renderData.indexCount;
        },

        // 计算每个顶点相对于sprite坐标的位置
        updateVertexData(sprite) {
          var renderData = sprite.renderData;

          if (!renderData) {
            return;
          }

          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var left = 0 - appX;
          var right = cw - appX;
          var top = ch - appY;
          var bottom = 0 - appY;
          var left_r = left + sprite.radius;
          var bottom_r = bottom + sprite.radius;
          var top_r = top - sprite.radius;
          var right_r = right - sprite.radius; // 三个矩形的顶点

          dataList[0].x = left;
          dataList[0].y = sprite.leftBottom ? bottom_r : bottom;
          dataList[1].x = left;
          dataList[1].y = sprite.leftTop ? top_r : top;
          dataList[2].x = left_r;
          dataList[2].y = sprite.leftTop ? top_r : top;
          dataList[3].x = left_r;
          dataList[3].y = sprite.leftBottom ? bottom_r : bottom;
          dataList[4].x = left_r;
          dataList[4].y = bottom;
          dataList[5].x = left_r;
          dataList[5].y = top;
          dataList[6].x = right_r;
          dataList[6].y = top;
          dataList[7].x = right_r;
          dataList[7].y = bottom;
          dataList[8].x = right_r;
          dataList[8].y = sprite.rightBottom ? bottom_r : bottom;
          dataList[9].x = right_r;
          dataList[9].y = sprite.rightTop ? top_r : top;
          dataList[10].x = right;
          dataList[10].y = sprite.rightTop ? top_r : top;
          dataList[11].x = right;
          dataList[11].y = sprite.rightBottom ? bottom_r : bottom; // 扇形圆角的顶点

          var index = 12;

          var fanPosBuild = function fanPosBuild(center, startAngle) {
            for (var i = 1; i < sprite.segments; i++) {
              // 我这里顶点都是按顺时针分配的，所以角度要从开始角度减
              // 每个扇形都是90度
              var angle = startAngle * Math.PI / 180 - i / sprite.segments * 0.5 * Math.PI;
              dataList[index].x = center.x + Math.cos(angle) * sprite.radius;
              dataList[index].y = center.y + Math.sin(angle) * sprite.radius;
              index++;
            }
          };

          if (sprite.leftBottom) fanPosBuild(dataList[3], 270);
          if (sprite.leftTop) fanPosBuild(dataList[2], 180);
          if (sprite.rightTop) fanPosBuild(dataList[9], 90);
          if (sprite.rightBottom) fanPosBuild(dataList[8], 0);
          renderData.vertDirty = true;
        },

        // 更新计算uv
        updateUVs(sprite) {
          if (!sprite.spriteFrame) return;
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var uv = sprite.spriteFrame.uv; // 这里我打印了一下uv的值，第一个看上去是左上角，但其实，opengl端的纹理存在上下颠倒问题，所以这里其实还是左下角
          // 左下，右下，左上，右上

          var uv_l = uv[0];
          var uv_b = uv[1];
          var uv_r = uv[2];
          var uv_t = uv[5];
          var uv_w = Math.abs(uv_r - uv_l);
          var uv_h = uv_t - uv_b;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch; // 用相对坐标，计算uv

          for (var i = 0; i < renderData.dataLength; i++) {
            vData[i * renderData.floatStride + 3] = uv_l + (dataList[i].x + appX) / cw * uv_w;
            vData[i * renderData.floatStride + 4] = uv_b + (dataList[i].y + appY) / ch * uv_h;
          }
        },

        // 照抄，不用改
        updateColor(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = color.a / 255;

          for (var i = 0; i < renderData.dataLength; i++, colorOffset += renderData.floatStride) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=500b0a354a13c04f11b12076e428258bac2db760.js.map