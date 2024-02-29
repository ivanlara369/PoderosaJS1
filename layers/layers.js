var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 0.655000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_seccionx_1 = new ol.format.GeoJSON();
var features_seccionx_1 = format_seccionx_1.readFeatures(json_seccionx_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seccionx_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seccionx_1.addFeatures(features_seccionx_1);
var lyr_seccionx_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seccionx_1, 
                style: style_seccionx_1,
                interactive: true,
                title: '<img src="styles/legend/seccionx_1.png" /> seccionx'
            });
var format_manzanaok_2 = new ol.format.GeoJSON();
var features_manzanaok_2 = format_manzanaok_2.readFeatures(json_manzanaok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanaok_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanaok_2.addFeatures(features_manzanaok_2);
var lyr_manzanaok_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanaok_2, 
                style: style_manzanaok_2,
                interactive: true,
                title: '<img src="styles/legend/manzanaok_2.png" /> manzanaok'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_seccionx_1.setVisible(true);lyr_manzanaok_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_seccionx_1,lyr_manzanaok_2];
lyr_seccionx_1.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'DISTRITO_L': 'DISTRITO_L', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'GEOMETRY1_': 'GEOMETRY1_', 'LN': 'LN', 'PAD': 'PAD', });
lyr_manzanaok_2.set('fieldAliases', {'ID': 'ID', 'ENTIDAD': 'ENTIDAD', 'DISTRITO_L': 'DISTRITO_L', 'DISTRITO': 'DISTRITO', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'LOCALIDAD': 'LOCALIDAD', 'MANZANA': 'MANZANA', 'STATUS': 'STATUS', 'DISPERSO': 'DISPERSO', 'CONTROL': 'CONTROL', 'CASO_CAPTU': 'CASO_CAPTU', 'GEOMETRY1_': 'GEOMETRY1_', 'PADRON': 'PADRON', 'LISTA': 'LISTA', });
lyr_seccionx_1.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'DISTRITO_L': 'Range', 'MUNICIPIO': 'TextEdit', 'SECCION': 'TextEdit', 'TIPO': 'Range', 'GEOMETRY1_': 'TextEdit', 'LN': 'TextEdit', 'PAD': 'TextEdit', });
lyr_manzanaok_2.set('fieldImages', {'ID': 'TextEdit', 'ENTIDAD': 'Range', 'DISTRITO_L': 'Range', 'DISTRITO': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'LOCALIDAD': 'Range', 'MANZANA': 'Range', 'STATUS': 'Range', 'DISPERSO': 'TextEdit', 'CONTROL': 'TextEdit', 'CASO_CAPTU': 'TextEdit', 'GEOMETRY1_': 'TextEdit', 'PADRON': 'TextEdit', 'LISTA': 'TextEdit', });
lyr_seccionx_1.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'DISTRITO_L': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'GEOMETRY1_': 'no label', 'LN': 'no label', 'PAD': 'no label', });
lyr_manzanaok_2.set('fieldLabels', {'ID': 'no label', 'ENTIDAD': 'no label', 'DISTRITO_L': 'no label', 'DISTRITO': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'LOCALIDAD': 'no label', 'MANZANA': 'no label', 'STATUS': 'no label', 'DISPERSO': 'no label', 'CONTROL': 'no label', 'CASO_CAPTU': 'no label', 'GEOMETRY1_': 'no label', 'PADRON': 'no label', 'LISTA': 'no label', });
lyr_manzanaok_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});