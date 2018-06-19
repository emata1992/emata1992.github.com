var size = 0;
var placement = 'point';
function categories_Simbologa_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Costa Rica':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Lago de nicaragua':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Oceano Pacífico':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Mar Caribe':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Panama':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(161,157,152,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Nicaragua':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.75)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(155,167,25,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Simbologa_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Lugar");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Times New Roman\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Lugar") !== null) {
        labelText = String(feature.get("Lugar"));
    }
    
var style = categories_Simbologa_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
