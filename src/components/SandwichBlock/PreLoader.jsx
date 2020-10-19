import React from 'react'
import ContentLoader from "react-content-loader"

function PreLoader() {
    return (
        <ContentLoader
            className="sandwich sandwich__preloader"
            speed={2}
            width={380}
            height={456}
            viewBox="0 0 380 456"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="25" y="25" rx="5" ry="5" width="330" height="174" />
            <rect x="25" y="220" rx="5" ry="5" width="330" height="39" />
            <rect x="25" y="280" rx="5" ry="5" width="330" height="73" />
            <rect x="25" y="376" rx="10" ry="10" width="126" height="53" />
            <rect x="225" y="376" rx="10" ry="10" width="126" height="53" />
        </ContentLoader>
    )
}

export default PreLoader
