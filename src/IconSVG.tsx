//https://jsfiddle.net/anu6x3bk/

import React, {useEffect, useState} from "react";

const IconSVG =(props:any)=>{
const {url} = props
type svgLoadType =  {
        svg?: any,
        loading?: boolean,
    }
    const  svgState:svgLoadType = {
        svg: null,
        loading: true,
    }
    const [svgLoad, setSvgLoad] = useState(svgState)

    useEffect(()=>{
        fetch(url)
            .then(res => res.text())
            .then(svgContent => {
                 setSvgLoad({
                     svg: svgContent
                 })
            });
    }, [])


    const { loading, svg } = svgLoad;



    if (loading) {
        return <p>Loading</p>;
    } else if(!svg || svgLoad.svg.includes("Cannot find")) {
        return <p>Error</p>;
    }
    return( <span dangerouslySetInnerHTML={{ __html: svgLoad.svg}}/>);

}
export {IconSVG}
