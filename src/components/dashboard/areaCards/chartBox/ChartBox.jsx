import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";



const ChartBox = (props) => {
  return (
    <div className="chartBox" >
      
      <div className="chartInfo">
        <div className="chart" >
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 30 }}
              />
              <Area
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
                fill={props.bg}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div> */}
      </div>
      <div className="boxInfo">
        <div className="title" >
          <span>{props.title}</span>
          <h1 className="" style={{color:props.number === "2,980" ? "white" :""}}>{props.number}</h1>
        </div>
        
      </div>
    </div>
  );
};

export default ChartBox;
