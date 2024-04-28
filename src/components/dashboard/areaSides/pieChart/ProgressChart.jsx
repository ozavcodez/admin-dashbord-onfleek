import React from 'react'
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "./pieChart.scss"


const ProgressChart = () => {
    return (
        <div className="piechart">
            <div className="radialBar">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={35}
                    duration={1.4}
                    easingFunction={easeQuadInOut}

                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            
                            <CircularProgressbar
                                value={value}
                                strokeWidth={8}
                                text={`${roundedValue}%`}

                              
                          styles={buildStyles(
                                    {
                                        pathTransition: "none",
                                        // backgroundColor: "",
                                        
                                        // textColor: "#3e98c7",
                                        // pathColor: "#f00",
                                        // trailColor: "transparent",
                                        strokeLinecap: "butt"
                                    })}
                            />
                        );
                    }}
                </AnimatedProgressProvider>
            </div>
        </div>
    )
}

export default ProgressChart
