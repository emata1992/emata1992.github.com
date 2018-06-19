var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Simbologa_0 = new ol.format.GeoJSON();
var features_Simbologa_0 = format_Simbologa_0.readFeatures(json_Simbologa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simbologa_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Simbologa_0.addFeatures(features_Simbologa_0);var lyr_Simbologa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Simbologa_0, 
                style: style_Simbologa_0,
    title: 'Simbología<br />\
    <img src="styles/legend/Simbologa_0_0.png" /> Costa Rica<br />\
    <img src="styles/legend/Simbologa_0_1.png" /> Lago de nicaragua<br />\
    <img src="styles/legend/Simbologa_0_2.png" /> Oceano Pacífico<br />\
    <img src="styles/legend/Simbologa_0_3.png" /> Mar Caribe<br />\
    <img src="styles/legend/Simbologa_0_4.png" /> Panamá<br />\
    <img src="styles/legend/Simbologa_0_5.png" /> Nicaragua<br />'
        });

lyr_Simbologa_0.setVisible(true);
var layersList = [baseLayer,lyr_Simbologa_0];
lyr_Simbologa_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Lugar': 'Lugar', });
lyr_Simbologa_0.set('fieldImages', {'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Lugar': 'TextEdit', });
lyr_Simbologa_0.set('fieldLabels', {'Lugar': 'no label', });
lyr_Simbologa_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});