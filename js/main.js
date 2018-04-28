/**
 * Created by Administrator on 2018/4/25.
 */
//
$(function(){
    //设备故障统计
    equipment()
    //中央空调发生故障项目top10
    project()
    //中国地图
   mapChina()
    //省级地图
    proMap()
    //中国空调使用年限分布统计
    yearSta();
    //全年监控统计
    monitoring();
    //中央空调区域数量分布
    num()
    //当前故障报警信息


})
function equipment(){
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    echarts.init(document.getElementById('equipment')).setOption(option);
}
function project(){
    option1 = {
        calculable: false,
        "tooltip": {
            "trigger": "item",
            "formatter": "{a}<br/>{b}:{c}"
        },
        "series": [{
            "name": "XX线索",
            "type": "pie",
            "radius": [
                37,
                105
            ],
            "avoidLabelOverlap": false,
            "startAngle": 0,
            "center": [
                "50.1%",
                "34%"
            ],
            "roseType": "area",
            "selectedMode": "single",
            "label": {
                "normal": {
                    "show": true,
                    "formatter": "{c}"
                },
                "emphasis": {
                    "show": true
                }
            },
            "labelLine": {
                "normal": {
                    "show": true,
                    "smooth": false,
                    "length": 10,
                    "length2": 5
                },
                "emphasis": {
                    "show": true
                }
            },
            "data": [{
                "value": 600.58,
                "name": "义乌市1",
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1"
                    }
                }
            },
                {
                    "value": 1100.58,
                    "name": "义乌市2",
                    "itemStyle": {
                        "normal": {
                            "color": "#ad46f3"
                        }
                    }
                },
                {
                    "value": 1200.58,
                    "name": "义乌市3",
                    "itemStyle": {
                        "normal": {
                            "color": "#5045f6"
                        }
                    }
                },
                {
                    "value": 1300.58,
                    "name": "义乌市4",
                    "itemStyle": {
                        "normal": {
                            "color": "#4777f5"
                        }
                    }
                },
                {
                    "value": 1400.58,
                    "name": "义乌市5",
                    "itemStyle": {
                        "normal": {
                            "color": "#44aff0"
                        }
                    }
                },
                {
                    "value": 1500.58,
                    "name": "义乌市6",
                    "itemStyle": {
                        "normal": {
                            "color": "#45dbf7"
                        }
                    }
                },
                {
                    "value": 1500.58,
                    "name": "义乌市7",
                    "itemStyle": {
                        "normal": {
                            "color": "#f6d54a"
                        }
                    }
                },
                {
                    "value": 1600.58,
                    "name": "义乌市8",
                    "itemStyle": {
                        "normal": {
                            "color": "#f69846"
                        }
                    }
                },
                {
                    "value": 1800,
                    "name": "义乌市9",
                    "itemStyle": {
                        "normal": {
                            "color": "#ff4343"
                        }
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            ]
        }]
    };

    echarts.init(document.getElementById('project')).setOption(option1);
}
function yearSta(){
    option3 = {
        color: ['#38b4ee',"#00BFFF","#FF00FF","#1ce322","#000000"],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            //trigger: 'axis'
            show: "true",
            trigger: 'axis',
            backgroundColor: 'rgba(0,90,139,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影

        },

        legend: {
            data:['3年以下','3-5年','5-7年','7年以上'],
            textStyle: {
                color: '#ffffff'
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:"#032764"
                }

                //    onZero:false
            },
            axisLabel: {
                textStyle: {
                    color: '#616C7F'
                }
            },
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#032764'],
                    type: 'solid'
                }
            },
            data: ['北京市', '北京市', '北京市', '北京市', '北京市', '北京市', '北京市', '北京市', '北京市']
        },
        yAxis: {
            interval: 20,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:"#032764"
                }

                //    onZero:false
            },
            axisLabel: {
                textStyle: {
                    color: '#616C7F'
                }
            },
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#032764'],
                    type: 'solid'
                }
            }
        },
        series: [
            {
                name: '3年以下',
                type: 'line',
                symbolSize:10,
                symbol:'circle',
                data: ['77', '43', '41', '40', '24', '53', '47', '50', '49'],
                itemStyle: {
                    normal: {
                        color: "#FF9800",
                    }
                },
            },
            {
                name: '3-5年',
                type: 'line',
                symbolSize:10,
                symbol:'circle',
                data: ['67', '23', '51', '60', '14', '33', '47', '30', '19'],
                itemStyle: {
                    normal: {
                        color: "#5C57CB",
                    }
                },
            },

            {
                name: '5-7年',
                type: 'line',
                symbolSize:10,
                symbol:'circle',
                data: ['99', '12', '78', '80', '34', '67', '78', '95', '109'],
                itemStyle: {
                    normal: {
                        color: "#1D2AFF",
                    }
                },
            },
            {
                name: '7年以上',
                type: 'line',
                symbolSize:10,
                symbol:'circle',
                data: ['102', '13', '81', '45', '23', '78', '200', '63', '39'],
                itemStyle: {
                    normal: {
                        color: "#F4E924",
                    }
                },
            },



        ]
    };
    echarts.init(document.getElementById('year')).setOption(option3);
}
function monitoring(){
    option4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['正常', '报警', '离线'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            name: '月',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            data: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },

            position: 'bottom',
            offset: 20,

        }],
        yAxis: [{
            type: 'value',
            name: '数量',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '正常',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12

                }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
            name: '报警',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
            name: '离线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: 'rgb(219,50,51)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        }, ]
    };
    echarts.init(document.getElementById('monitoring')).setOption(option4);
}
function num(){
    var xData = function() {
        var data = [];
        for (var i = 2011; i < 2017; i++) {
            data.push(i);
        }
        return data;
    }();

    var data = [13.7, 13.4, 13.5, 16.1, 17.4, 15.2]

    option5 = {
        tooltip: {
            show: "true",
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            formatter: function(params) {
                if (params.seriesName != "") {
                    return params.name + ' ：' + params.value;
                }
            },

        },
        grid: {
            borderWidth: 0,

            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#496277',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: xData,
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xData,
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#496277',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#17324E ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#bac0c0',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                formatter: '{value}',
            },
        },
        series: [{
            name: '生师比(%)',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c0e9'
                    }, {
                        offset: 1,
                        color: '#3b73cf'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: data,
        },
            {
                name: '',
                type: 'bar',
                xAxisIndex: 1,
                zlevel: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(3, 23, 57,0.7)',
                        borderWidth: 1,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
                barWidth: '10%',
                data: [30, 30, 30, 30, 30, 30]
            }
        ]
    }
    echarts.init(document.getElementById('num')).setOption(option5);
}
function mapChina(){
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };
    var BJData = [
        [{name:'上海',value:100}, {name:'合肥'}],
        [{name:'广州',value:70}, {name:'合肥'}],
        [{name:'哈尔滨',value:30}, {name:'合肥'}],
        [{name:'青岛',value:50}, {name:'合肥'}],
        [{name:'南昌',value:20}, {name:'合肥'}],
        [{name:'银川',value:10}, {name:'合肥'}],
        [{name:'拉萨',value:80}, {name:'合肥'}],
        [{name:'西安',value:55}, {name:'合肥'}],
        [{name:'乌鲁木齐',value:90}, {name:'合肥'}]
    ];
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if (fromCoord && toCoord) {
                res.push([
                    {
                        coord:fromCoord,
                        value: dataItem[0].value
                    },
                    {
                        coord: toCoord,
                    }
                ]);
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['合肥', BJData]].forEach(function (item, i) {
        series.push(
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02,//特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol:'arrow',//箭头图标
                    symbolSize: 5,//图标大小
                },
                lineStyle: {
                    normal: {
                        width: 1,//尾迹线条宽度
                        opacity: 0,//尾迹线条透明度
                        curveness: 0 //尾迹线条曲直度
                    }
                },

                data: convertData(item[1])
            },
            {//被攻击点样式
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {//涟漪特效
                    period:4,//动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',//显示位置
                        offset:[5, 0], //偏移设置
                        formatter: '{b}' //圆环显示文字
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function (val) {
                    return 4 + val[2] / 10; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },

            {//天津 攻击点样式
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period:4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
//			                offset:[5, 0],

                        color:'#00ffff',
                        formatter: '{b}',
                        textStyle: {
                            color:"#00ffff"
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'pin',
                symbolSize:30,
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#9966cc'
                    }
                },
                data:[{
                    name: item[0],
                    value: geoCoordMap[item[0]].concat([100]),
                }],
            }
        );
    });

    option2 = {
        tooltip : {
            trigger : 'item',
            backgroundColor: 'rgba(0,90,139,0.7)', // 背景
            borderColor:'#FFFFCC',
            showDelay : 0,
            hideDelay : 0,
            enterable:true,
            transitionDuration : 0,
            extraCssText:'z-index:100',
            formatter : function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:red;'>"+name+"</span><br/>坐标："+value;
                return res;
            }
        },
        visualMap: { //图例值控制
            min : 0,
            max : 100,
            calculable : true,
            color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
            textStyle:{
                color:'#fff'
            },
            show:false
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            layoutCenter: ['50%', '53%'], //地图位置
            layoutSize:"108%",
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .0)', //地图背景色
                    borderColor: '#66D6FF',//省市边界线
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)'//悬浮背景
                }
            }
        },

        series: series
    };
    var counts = option.series[0].data.length; //获取所有闪动圆环数量
    var dataIndex = 0;
    //让圆环的提示框自动触发轮播显示
    function autoHoverTip(){
        for(var i = 0;i<counts;i++){
            (function (i) {
                ts = setTimeout(function () {
                    echarts.init(document.getElementById('chinaMap')).dispatchAction({
                        type: 'showTip',
                        seriesIndex: 1,
                        dataIndex: i
                    });
                }, 5000*i);
            })(i);
        }
    }

    setTimeout(function() {
        autoHoverTip();
        tv = setInterval(autoHoverTip, counts*5600);
    }, 500);

    echarts.init(document.getElementById('chinaMap')).setOption(option2);
}
function proMap(){
    var uploadedDataURL = "./json/anhui.json";
    var myChart= echarts.init(document.getElementById('proMap'))
    myChart.showLoading();
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('anhui', geoJson);
        myChart.hideLoading();
        var geoCoordMap = {
            '省委':[117.37,31.786],
            '合肥市':[117.37,31.386],
            '六安市':[116.27,31.786],
            '滁州市':[118.07,32.486],
            '蚌埠市':[117.27,33.086],
            '淮南市':[116.67,32.786],
            '宿州市':[117.77,33.486],
            '淮北市':[116.67,33.686],
            '亳州市':[116.27,33.386],
            '阜阳市':[115.57,32.986],
            '安庆市':[116.47,30.486],
            '池州市':[117.47,30.386],
            '黄山市':[118.17,29.886],
            '宣城市':[119.27,30.916],
            '芜湖市':[118.17,31.186],
            '马鞍山市':[118.47,31.616],
            '铜陵市':[117.87,30.956],
        };
        var data = [
            {name:'合肥市',value:190},
            {name:'六安市',value:190},
            {name:'滁州市',value:190},
            {name:'蚌埠市',value:190},
            {name:'淮南市',value:90},
            {name:'宿州市',value:120},
            {name:'淮北市',value:120},
            {name:'亳州市',value:120},
            {name:'阜阳市',value:120},
            {name:'安庆市',value:190},
        ];
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };


        option6 = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if(typeof(params.value)[2] == "undefined"){
                        return params.name + ' : ' + params.value;
                    }else{
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },

            geo: {
                show: true,
                map: 'anhui',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        color: 'rgba(51, 69, 89, .0)', //地图背景色
                        borderColor: '#66D6FF',//省市边界线
                    },
                    emphasis: {
                        color: 'rgba(37, 43, 61, .5)'//悬浮背景
                    }
                }
            },
            series : [
                {

                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F4E925'
                        }
                    }
                },
                {
                    type: 'map',
                    map: 'anhui',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,

                    animation: false,
                    data: data
                },


            ]
        };
        myChart.setOption(option6);
    });

}
