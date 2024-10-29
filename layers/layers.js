var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QueryLayer_1 = new ol.format.GeoJSON();
var features_QueryLayer_1 = format_QueryLayer_1.readFeatures(json_QueryLayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QueryLayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QueryLayer_1.addFeatures(features_QueryLayer_1);
var lyr_QueryLayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QueryLayer_1, 
                style: style_QueryLayer_1,
                popuplayertitle: "QueryLayer",
                interactive: true,
                title: '<img src="styles/legend/QueryLayer_1.png" /> QueryLayer'
            });
var format_QueryLayer_2_2 = new ol.format.GeoJSON();
var features_QueryLayer_2_2 = format_QueryLayer_2_2.readFeatures(json_QueryLayer_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QueryLayer_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QueryLayer_2_2.addFeatures(features_QueryLayer_2_2);
var lyr_QueryLayer_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QueryLayer_2_2, 
                style: style_QueryLayer_2_2,
                popuplayertitle: "QueryLayer_2",
                interactive: true,
                title: '<img src="styles/legend/QueryLayer_2_2.png" /> QueryLayer_2'
            });
var format_jalan_ln_25k_3 = new ol.format.GeoJSON();
var features_jalan_ln_25k_3 = format_jalan_ln_25k_3.readFeatures(json_jalan_ln_25k_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_ln_25k_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_ln_25k_3.addFeatures(features_jalan_ln_25k_3);
var lyr_jalan_ln_25k_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_ln_25k_3, 
                style: style_jalan_ln_25k_3,
                popuplayertitle: "jalan_ln_25k",
                interactive: true,
                title: '<img src="styles/legend/jalan_ln_25k_3.png" /> jalan_ln_25k'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_QueryLayer_1.setVisible(true);lyr_QueryLayer_2_2.setVisible(true);lyr_jalan_ln_25k_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QueryLayer_1,lyr_QueryLayer_2_2,lyr_jalan_ln_25k_3];
lyr_QueryLayer_1.set('fieldAliases', {'_uid_': '_uid_', 'gid': 'gid', 'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_QueryLayer_2_2.set('fieldAliases', {'_uid_': '_uid_', 'gid': 'gid', 'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_jalan_ln_25k_3.set('fieldAliases', {'gid': 'gid', 'namrjl': 'namrjl', 'konrjl': 'konrjl', 'matrjl': 'matrjl', 'fgsrjl': 'fgsrjl', 'utkrjl': 'utkrjl', 'tolrjl': 'tolrjl', 'wlyrjl': 'wlyrjl', 'autrjl': 'autrjl', 'klsrjl': 'klsrjl', 'spcrjl': 'spcrjl', 'jparjl': 'jparjl', 'arhrjl': 'arhrjl', 'starjl': 'starjl', 'kllrjl': 'kllrjl', 'medrjl': 'medrjl', 'locrjl': 'locrjl', 'jarrjl': 'jarrjl', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', });
lyr_QueryLayer_1.set('fieldImages', {'_uid_': 'TextEdit', 'gid': 'TextEdit', 'kdppum': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'kdpbps': 'TextEdit', 'fcode': 'TextEdit', 'luaswh': 'TextEdit', 'uupp': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdbbps': 'TextEdit', 'kdbpum': 'TextEdit', 'wadmkd': 'TextEdit', 'wiadkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wiadkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wiadkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadpr': 'TextEdit', 'tipadm': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_QueryLayer_2_2.set('fieldImages', {'_uid_': 'TextEdit', 'gid': 'TextEdit', 'kdppum': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'kdpbps': 'TextEdit', 'fcode': 'TextEdit', 'luaswh': 'TextEdit', 'uupp': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdbbps': 'TextEdit', 'kdbpum': 'TextEdit', 'wadmkd': 'TextEdit', 'wiadkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wiadkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wiadkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadpr': 'TextEdit', 'tipadm': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_jalan_ln_25k_3.set('fieldImages', {'gid': 'TextEdit', 'namrjl': 'TextEdit', 'konrjl': 'TextEdit', 'matrjl': 'TextEdit', 'fgsrjl': 'TextEdit', 'utkrjl': 'TextEdit', 'tolrjl': 'TextEdit', 'wlyrjl': 'TextEdit', 'autrjl': 'TextEdit', 'klsrjl': 'TextEdit', 'spcrjl': 'TextEdit', 'jparjl': 'TextEdit', 'arhrjl': 'TextEdit', 'starjl': 'TextEdit', 'kllrjl': 'TextEdit', 'medrjl': 'TextEdit', 'locrjl': 'TextEdit', 'jarrjl': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_QueryLayer_1.set('fieldLabels', {'_uid_': 'no label', 'gid': 'no label', 'kdppum': 'no label', 'namobj': 'no label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'no label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_QueryLayer_2_2.set('fieldLabels', {'_uid_': 'no label', 'gid': 'no label', 'kdppum': 'no label', 'namobj': 'no label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'no label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_jalan_ln_25k_3.set('fieldLabels', {'gid': 'no label', 'namrjl': 'no label', 'konrjl': 'no label', 'matrjl': 'no label', 'fgsrjl': 'no label', 'utkrjl': 'no label', 'tolrjl': 'no label', 'wlyrjl': 'no label', 'autrjl': 'no label', 'klsrjl': 'no label', 'spcrjl': 'no label', 'jparjl': 'no label', 'arhrjl': 'no label', 'starjl': 'no label', 'kllrjl': 'no label', 'medrjl': 'no label', 'locrjl': 'no label', 'jarrjl': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'shape_leng': 'no label', });
lyr_jalan_ln_25k_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});