define(['./stickermap2d/StickerMap2D','./stickermap3d/StickerMap3D','./catalog'
],function(
    StickerMap2D, StickerMap3D, Catalog) {
    'use strict';
    /**
     * 构建StickerMap对象
     */
    var StickerMap = {
        VERSION : '1.1'
    };
    //封装二维三维对象
    window.StickerMap2D = StickerMap2D;
    window.StickerMap3D = StickerMap3D;
    //封装目录对象
    StickerMap['Catalog'] = Catalog;


    window.StickerMap = StickerMap;
    return window.StickerMap;
});