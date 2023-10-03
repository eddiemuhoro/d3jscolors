import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

const Colors = () => {
    const [colors, setColors] = useState([]); // Initialize an empty array
    const [ndreColors, setNdriColors] = useState([]); // Initialize an empty array
    const [msaviColors, setMsaviColors] = useState([]); // Initialize an empty array
    const [ndwiColors, setNdwiColors] = useState([]); // Initialize an empty array

useEffect(() => {
    const numColors = 20; // Adjust the number of colors as needed
    const ndwiColorScale = d3
      .scaleSequential(d3.interpolateBlues)
      .domain([-1, 1]);
    
    const colorValues = [];
    for (let i = 0; i <= numColors; i++) {
      const ndwiValue = (i / numColors) * 2 - 1;
      const color = ndwiColorScale(ndwiValue);
      colorValues.push(color);
    }
    
    setColors(colorValues);
  }, []); // Re-run this effect whenever ndwiData changes

    useEffect(() => {
        const numColors = 20; // Adjust the number of colors as needed
        const ndreColorScale = d3
          .scaleSequential(d3.interpolateRdYlGn)
          .domain([-1, 1]);
        
        const colorValues = [];
        for (let i = 0; i <= numColors; i++) {
          const ndreValue = (i / numColors) * 2 - 1;
          const color = ndreColorScale(ndreValue);
          colorValues.push(color);
        }
        
        setNdriColors(colorValues);
      }
        , []); // Re-run this effect whenever ndriData changes

        useEffect(() => {
            const numColors = 20; // Adjust the number of colors as needed
            const msaviColorScale = d3
              .scaleSequential(d3.interpolateRdYlGn)
              .domain([-1, 1]);
            
            const colorValues = [];
            for (let i = 0; i <= numColors; i++) {
              const msaviValue = (i / numColors) * 2 - 1;
              const color = msaviColorScale(msaviValue);
              colorValues.push(color);
            }
            
            setMsaviColors(colorValues);
          }
            , []); // Re-run this effect whenever ndriData changes

            useEffect(() => {
                const numColors = 20; // Adjust the number of colors as needed
                const ndwiColorScale = d3
                  .scaleSequential(d3.interpolateBlues)
                  .domain([-1, 1]);
                
                const colorValues = [];
                for (let i = 0; i <= numColors; i++) {
                  const ndwiValue = (i / numColors) * 2 - 1;
                  const color = ndwiColorScale(ndwiValue);
                  colorValues.push(color);
                }
                
                setNdwiColors(colorValues);
              }
                , []); // Re-run this effect whenever ndwiData changes

  

  return (
    <div>
        <h2>Colors</h2>
        <section
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridGap: 20
        }}
        >
              <div>
            {ndreColors.map((color, i) => (
                <>
               
                <div key={i} style={{ backgroundColor: color, width: 150, height: 50 }}>{color}</div>

                </>
            ))}
        </div>

        <div>
            {msaviColors.map((color, i) => (
                <>
               
                <div key={i} style={{ backgroundColor: color, width: 150, height: 50 }}>{color}</div>

                </>
            ))}
        </div>

        <div>
            {colors.map((color, i) => (
                <>
               
                <div key={i} style={{ backgroundColor: color, width: 150, height: 50 }}>{color}</div>

                </>
            ))}
        </div>

      
        <div>
            {ndwiColors.map((color, i) => (
                <>
               
                <div key={i} style={{ backgroundColor: color, width: 150, height: 50 }}>{color}</div>

                </>
            ))}
        </div>
        </section>
    </div>
  )
}

export default Colors