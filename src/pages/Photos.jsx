import React, {useContext} from "react"
import { Context } from "../Context"
import { getClass } from "../utils"
import Image from "../components/Images"

function Photos() {
    const {allPhotos} = useContext(Context)
    console.log('allphotos',allPhotos)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos
