import { NewS } from './NewsletterStyle';
import { useState } from 'react';
import axios from "axios";

function NewsletterS() {
    const url = 'https://thefoundater.azurewebsites.net/newsletter/'
    const [data, setData] = useState({
        email: "",
    })
    async function submit(e) {
        e.preventDefault();
        axios.post(url, {
            email: data.email,
        })
            .then(res => {
                console.log(res.data)
            })

    }
    async function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <NewS>
            <form onSubmit={e => { submit(e) }}>
                <h1>Newsletter Signup</h1>
                <p>No spam, unsubscribe at any time.</p>
                <div className="info">
                    <input type="email" name="email" value={data.email} placeholder="Email Adress" onChange={e => handle(e)} />
                </div>
                <input type="submit" value='submit' />
            </form>
        </NewS>
    )
}

export default NewsletterS;