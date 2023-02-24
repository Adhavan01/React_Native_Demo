import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {storage} from './FireBase'
import {ref, uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

function ImageUplode() {
    const [imageUplod,setImagetUplode]=useState('')
    const [imageList,setImageList]=useState([])
    const {register,handleSubmit,formState:{errors}}=useForm()
    
    const imageListRef = ref(storage,'images/')
    const uploadImage=()=>{
        if(uploadImage == null) return;
        const imageRef = ref(storage,`images/${imageUplod.name + v4()}`);
        uploadBytes(imageRef,imageUplod).then((snapshort)=>{
            getDownloadURL(snapshort.ref).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
            
        })
    }

    useEffect(()=>{
        listAll(imageListRef).then((Response)=>{
            Response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url])
                })
                
            })
        })
    },[])


  return (

    <div className='ImgaeUploder flex flexDir flexJC-C'>
        <div className='ImagaFile'>
        <h1>Photo Gallary</h1>

        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
        })}>
      
        <input type='file' id='file' className="inputfile"  placeholder='uplode Jpg' {...register('ImageFile', {required:'*Uplode only JPG,Png',pattern:({value:/^[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/})})} onChange={(e)=>setImagetUplode(e.target.files[0])} />
        <label for="file">Choose a file</label>
        {errors?.ImageFile && <p>{errors.ImageFile.message}</p>}

        <button onClick={uploadImage} className="btn">Submit</button>
        </form>
        </div>
          <div className='continer'  >
        <div className='card'>
        {imageList.map((url)=>{
            return (
                <div className='card2'>
        <img src={url} alt="" className='img'/>
        </div>
            )
        })}
        </div>
    </div>
    </div>
  )
}

export default ImageUplode