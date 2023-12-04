```
容器属性：
flex-direction：决定主轴方向，排列方向（横排列还是竖排列） 地 ruai 克 申
  row（默认值）：主轴为水平方向，起点在左端。
  row-reverse：主轴为水平方向，起点在右端。
  column：主轴为垂直方向，起点在上沿。
  column-reverse：主轴为垂直方向，起点在下沿。

flex-wrap：如果一条轴线排不下，如何换行（默认排在一条轴线） ruai 破
  nowrap（默认）：不换行。
  wrap：换行，第一行在上方。
  wrap-reverse：换行，第一行在下方。

flex-flow：是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。 fu lao

****** justify-content、align-items、align-content都是对齐方式 ******
justify-content：主轴上的对齐方式
  flex-start（默认值）：左对齐
  flex-end：右对齐
  center： 居中
  space-between：两端对齐，项目之间的间隔都相等  斯bei斯 逼囤
  space-around：每个项目两侧的间隔相等  斯bei斯  额 ruang 特

align-items：交叉轴上如何对齐
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  center：交叉轴的中点对齐。
  baseline: 项目的第一行文字的基线对齐
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

align-content：多根轴线的对齐方式（如果项目只有一根轴线，该属性不起作用）
  flex-start：与交叉轴的起点对齐。  
  flex-end：与交叉轴的终点对齐。
  center：与交叉轴的中点对齐。
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  space-around：每根轴线两侧的间隔都相等。
  stretch（默认值）：轴线占满整个交叉轴。
```
```
项目属性：
order： 项目的排列顺序。数值越小，排列越靠前，默认为0。 哦 嘚儿
flex-grow： 项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 歌 绕儿
flex-shrink：项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。（一个为0，其他为1.空间不足时，0的不缩小，1的等比缩小）顺儿 克
flex-basis：主轴方向上的初始大小。它的默认值为auto。就是设置宽度（宽度优先级：max-width/min-width > flex-basis > width > box） bei sei 斯
flex： 属性是flex-grow, flex-shrink 和 flex-basis的简写
  flex: initial;（默认值） flex: 0 1 auto （当有剩余空间不会变大，当宽度不够时会等比缩小，大小根据自身宽高调整）in 那 瘦
  flex: none: flex: 0 0 auto; （当有剩余空间不会变大，当宽度不够时不会缩小，大小根据自身宽高调整）
  flex: auto; flex: 1 1 auto;  (当有剩余空间就会等比变大，当宽度不够时会等比缩小，大小根据自身宽高调整)
  flex: 1; flex: 1 1 0%; (当有剩余空间就会等比变大，当宽度不够时会等比缩小, 自身宽度为最小宽度)
  flex: 0; flex: 0 1 0%; (不放大也不缩小，自身宽度为最小宽度)
```