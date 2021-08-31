import { useEffect, useState } from "react"
import reactHookForm, { useForm } from 'react-hook-form'

export default function formPage() {
    const { register, handleSubmit, watch } = useForm()

    const name = watch('name')
    const age = watch('age')
    const work = watch('work')

    const onsubmit = (data_) => {
        console.log(data_);
    }

    useEffect(() => {
        if (name === "fulan") {
            alert('hello world')
        }

    }, [name])

    return (
        <div style={{ padding: "10em" }}>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <label >Nama :</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label >Umur :</label>
                    <input type="text" {...register("age")} />
                </div>
                <div>
                    <label >Pekerjaan :</label>
                    <input type="text" {...register("work")} />
                </div>

                <button type="submit">Submit</button>
            </form>
            <hr />
            <p>Nama: {name}</p>
            <p>Umur: {age}</p>
            <p>Pekerjaan: {work}</p>
        </div>
    )
}