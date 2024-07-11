import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Black Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white' 
            })
            setBtnText("Enable Light Mode")
        }
    }

  return (
    <div className = "container" style = {myStyle}>
        <h1 className="my-4">About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"style = {myStyle}>
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"  style = {myStyle}>Placeholder content for this accordion, Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ea nesciunt? Exercitationem omnis a aperiam unde. Vel fugit recusandae voluptas, assumenda aspernatur porro reprehenderit ex nesciunt sunt voluptates magnam, cum facilis perferendis? Ipsa rem assumenda placeat inventore error recusandae, laboriosam, ducimus sed beatae repellat quae animi nisi accusamus quam quisquam a deserunt pariatur praesentium. Nobis aliquam dolorem temporibus, totam nihil rem consequatur est exercitationem molestiae tempore reprehenderit tempora cum neque itaque optio quos excepturi hic non voluptate quasi. , which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  style = {myStyle}>
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"  style = {myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis, natus necessitatibus illo eligendi commodi saepe ratione praesentium officia quia non nisi corporis unde at suscipit aliquid voluptatibus facere magni quidem beatae repellat dolores similique! Reiciendis accusantium enim facere tempore, quia vero assumenda optio aspernatur fugit maiores doloribus impedit quidem vitae debitis delectus alias. Quae facilis quos aut cum, sint ab temporibus assumenda inventore hic, suscipit debitis. Molestiae libero maiores quam sequi, adipisci itaque quae explicabo quis rem tempore corporis quod eum veritatis suscipit eligendi impedit dolorem quia voluptatibus? Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"  style = {myStyle}>
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"  style = {myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem accusamus expedita ipsam accusantium quia officiis, quod eaque magnam illum quisquam, maiores reprehenderit aliquid incidunt repudiandae labore, a placeat! Eos placeat autem sapiente amet, vero numquam eligendi quaerat nobis, laborum maxime est aspernatur maiores earum! Vitae expedita, quia ut voluptatum enim assumenda minus laborum ipsum dignissimos quae optio vel incidunt voluptate ab possimus est sint dolore alias! at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
        </div>
        <div className="container">
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
        </div>

    </div>
  )
}
