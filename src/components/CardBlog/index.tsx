import { Card } from "./styles"
import image1 from '../../assets/blog_image_1.svg'

import author1 from '../../assets/author1.svg'



export const CardBlog = ()=>{
  return(
    <Card>
      <img src={image1} alt="" />
      <h3>Quick-start Guide to nuts and seeds</h3>
      <div className='author'>
        <img src={author1} alt="" />
        <span>Kebin Ibrahim</span>
      </div>
    </Card>
  )
}