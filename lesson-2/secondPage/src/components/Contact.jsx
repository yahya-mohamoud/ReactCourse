import React from 'react'

function Card ({ name, imgUrl, phone, email}) {
    return (
        <div className="card">
            <article className='contactCard'>
                <img src={imgUrl} alt="cat" className='card-photo' />
                <h3>{name}</h3>
                <div className="infoGroup">
                    <img src="../src/assets/email.png" alt="" />
                    <p>{phone}</p>
                </div>
                <div className="infoGroup">

                    <img src="../src/assets/phone.png" alt="" />
                    <p>{email}</p>
                </div>
            </article>
        </div>
    )
}

function Contact() {
  return (
    <div className='contact'>
        <Card 
            name='Mr. Whisker'
            imgUrl="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww"
            phone="(251) 889-9876"
            email="whisker@gmail.com"
        /> 
        <Card
            name="Mr. ali"
            email="ali@email.com"
            phone='251 432 2342'
            imgUrl="https://media.istockphoto.com/id/2160076948/photo/stray-tabby-kitten.webp?a=1&b=1&s=612x612&w=0&k=20&c=zQ1Y_aZskP_G0xes-R07MLStk4FyusM5UDi5xwNjNo8="
        /> 
        <Card
            name="Mr. abdi"
            email="email@email.xom"
            phone="212 112 2222"
            imgUrl="https://media.istockphoto.com/id/623368750/photo/sacred-birma-cat-in-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=jWcRQNkdR28sTTUnqMTHOx_zZXUb0hcY71te4u1SERo="
        /> 
     
    </div>
  )
}

export default Contact