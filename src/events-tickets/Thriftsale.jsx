import React from "react";
import '../App.css';
import P1 from "../photos/thriftsale.jpg";

const ThriftSale = () => {
    return(
        <>
        <section className="exp-info-events">
    <span className="pg-heading">
    <span className="main-tit">🛍️Thrift Sale Alert🛍️ </span> <br/>
    <b>🌱 Reduce, Reuse, and Refresh your wardrobe!🌟</b>
</span>
<br/>
<img src={P1} alt="" className="art-img"/>
 <br />
 {/* <b>
 This initiative is brought to you by: Yi && 
CII <br />
 </b> */}
Hey there,
<br/>
We are thrilled to invite you to our Thrift Sale of Pre-Loved Items, a unique event where sustainability meets style! Don’t miss out on this exciting opportunity to find some hidden gems, reduce waste, and make a difference.
<br/>
<br />

<b>
🌟 What’s in Store?</b>  
We’ve got a delightful selection of pre-loved items waiting for a second home:
<br />
👗 Clothing: Trendy and traditional wear at affordable prices <br />
🧸 Toys: From plushies to puzzles, perfect for kids and collectors alike <br />
🍳 Kitchenware: Functional and decorative pieces to add charm to your kitchen <br />
👜 Accessories: Bags, belts, and more to complement your style
<br/>
<br />
<b>
💬 Spread the Word!</b>
{/* <br /> */}
Tell your friends, family, and colleagues about this event! The more people we gather, the greater our impact. 🌏
<br />📅 Mark your calendars and join us this Sunday! <br />
Let’s create a ripple of positive change while finding some amazing pre-loved treasures.

We can’t wait to see you at the Civic Exnora Community Hall! 😊

<br/>
<br/>

An initiative by YI and CII to promote sustainable living and conscious consumption.

<br/>
<br/>
<span className="pg-heading">
<b>Venue:<a href="https://maps.app.goo.gl/nJ1n9nBorh3LsgXcA?g_st=iw"><u> Civic Exnora, Daspalla Hills.</u></a> </b>
<b>
📝 <u><a href="https://www.linkedin.com/in/yuvaviit/">No registration required! Have a question tap to dm us.</a></u><br></br>
</b>
</span>
    </section>
        </>
    )
}

export default ThriftSale