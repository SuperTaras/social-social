import React from 'react';
import st from './Post.module.css'


export const Post = () => {
    return (
        <div className={st.posts}>
            <div className={st.item}>
                <img
                    src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128771571/original/c540edc5830213c6de3243d97061c3f12cdc2d3b/design-a-digital-icon-of-your-roblox-character.png'/>
                Post 1
                <div>
                    <button>
                     <span>like</span>
                </button>
                </div>
            </div>
        </div>


    )
}


