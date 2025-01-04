import React from "react";
import "./App.css";
import Member from "./Team_mem";

const Team = () =>{
    const teamdata = [
        {
          "name": "Rahul Kasimikota",
          "position": "Lead",
          "link": "https://media.licdn.com/dms/image/v2/D5603AQGLRIg0uREKkg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731674710517?e=1741219200&v=beta&t=RySwVCA39RHI82-bv68YwNwIiQ2eCnTzT6AFoAgcC_I",
          "linkedin": "https://www.linkedin.com/in/kasimikotasanthoshrahul/"
        },
        {
          "name": "G Anushma Shine",
          "position": "Co Lead",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/gudisa-anushmashine-0770a4250?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD3zBVsBiAEZkdaf85bClR7nZzRcb1LDbsc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BdWZkwOFsSZacIXAVAIDr3g%3D%3D"
        },
        {
          "name": "Hemanth Sagar",
          "position": "Event Manager",
          "link": "",
          "linkedin": ""
        },
        {
          "name": "N Narshima Murthy",
          "position": "Lead Climate Change",
          "link": "",
          "linkedin": ""
        },
        {
          "name": "D Pavan Kumar",
          "position": "Co Lead Climate Change",
          "link": "https://media.licdn.com/dms/image/v2/D5603AQFtZtDb5rrA-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720901495501?e=1741219200&v=beta&t=mLjSjelkdW8fQryGPMHe6nEa--aJevSzDP3W9R3o-44",
          "linkedin": "https://www.linkedin.com/in/das-pavan-kumar-686279165/"
        },
        {
          "name": "DVS Neha",
          "position": "Lead Innovation",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/neha-dvs-275181270?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEI7nDkB2E3Zt6UHt5Se58tCRcOpTl1MGNo&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BJcFKXWYeSoOpAsDuWK66ow%3D%3D"
        },
        {
          "name": "D M S Pranamya",
          "position": "Co Lead Innovation",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/dmspranamya/"
        },
        {
          "name": "B Likhita",
          "position": "Lead Learning",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/likhita-beesetty-b18246264?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEDRysQBIxCk2_lVwyciXEg690kuwUjyNDU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BBGjKeUG4TWy4VZBhlPCfhg%3D%3D"
        },
        {
          "name": "G Sudarshan",
          "position": "Co Lead Learning",
          "link": "https://media.licdn.com/dms/image/v2/D5635AQGDizw3VnM3Ng/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1728466694815?e=1736618400&v=beta&t=ZDUghva5zvcAiaZ-CrBMeWtWdp8f8YoBhip1QwIs_Rc",
          "linkedin": "https://www.linkedin.com/in/sudarshan-gulipalli-5a2270270?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEI_EkoBpUphOjUOxuRUTRMfVdat-mYCTV8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BzHOSwLiTSri10u9HFi%2FQ%2Fw%3D%3D"
        },
        {
          "name": "P Sita",
          "position": "Lead Road Safety",
          "link": "https://media.licdn.com/dms/image/v2/D5635AQGWEHuEHd4hfw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1719507354460?e=1736618400&v=beta&t=BuWfI5v2dtE_U6-A3WM0o0UQwua4nD0yX7UkEKfKK4I",
          "linkedin": "https://www.linkedin.com/in/sitha-samvrutha-pitambaram-4b8740270?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEJRGswBaZmT5O2OGd8VxK3wpzBtoGBPhSk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BQ2%2B3rfMgRz6sFiFZrbh0Jg%3D%3D"
        },
        {
          "name": "Akash Mishra",
          "position": "Co Lead Road Safety",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/akash1mishra01?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADt-en0B54pJidgXDtT4Zzad3_WIRnW0Cng&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BVaouBc%2BvRMyV8gpvGQGnsg%3D%3D"
        },
        {
          "name": "Kulsoom Nisha",
          "position": "Lead Accessibility",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/kulsoom-nisha-53387526b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEIoa7cBWoJvXu5qTztbyMXgFuQurt7x43U&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BgoP7YYFtSWKl32JCzDGcwA%3D%3D"
        },
        {
          "name": "L Rashmi",
          "position": "Co Lead Accessibility",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/rashmi-landa-294796255/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWozZv2cIT4OCXloBDXtl5A%3D%3D"
        },
        {
          "name": "K Akankasha",
          "position": "Lead Entrepreneurship",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/akankasha-korrayi-560021268?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEF_q9gBIWliQxUH6GmRXROBNHoY0qBt59o&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bt8HeKIGfRJidE7Qhz2P%2B2w%3D%3D"
        },
        {
          "name": "Kanchana",
          "position": "Co Lead Entrepreneurship",
          "link": "https://media.licdn.com/dms/image/v2/D5603AQEsHBx1vtg1Dw/profile-displayphoto-shrink_100_100/B56ZP5UHIkHoAU-/0/1735054620223?e=1741219200&v=beta&t=fuS7H3hbNaG_q4guKtqcvB4ot7MWNZ8fUY-y-JqNyTo",
          "linkedin": "https://www.linkedin.com/in/kanchana-ketha-a67740272?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEKsPe8BsrMZdaYjJVb4a1hU_hYYyRmeLSw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BOMFKn%2F9rROe%2BImDgNqNPBw%3D%3D"
        },
        {
          "name": "Mounika",
          "position": "Co Lead Entrepreneurship",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/mounika-kotaru-3103b8271?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEJx5rwBSGYXmd7iVC4LFG3PYGaGRELirvk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BC3sArT8RTtq7whB1%2FEjgDQ%3D%3D"
        },
        {
          "name": "K S Vaishnavi",
          "position": "Lead Health",
          "link": "",
          "linkedin": ""
        },
        {
          "name": "K Vasantha",
          "position": "Co Lead Health",
          "link": "",
          "linkedin": "https://www.linkedin.com/in/vasantha-korada-6bb603270?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEJMIC8BB-GgR9j_co7B_EFJUmVcjDo8urw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B2BX0FFc%2FSxadmiv7YO%2BQLg%3D%3D"
        }
      ];
      
    return(
        <>
               <span className="pg-heading eve-head" >Meet our team..!</span>
            <span className="mem-li-cover">
            {teamdata.map((mem, index) => (
            <Member
                key={index}
                link={mem.link}
                linkedin={mem.linkedin}
                name={mem.name}
                position={mem.position}
            />
        ))}

                </span>
        </>
    )
};
export default Team;