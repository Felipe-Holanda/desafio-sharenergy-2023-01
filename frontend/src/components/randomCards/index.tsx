import { Card } from '../../styles/components/card.component'

interface iCards {
    img: string;
    name: string;
    surname: string;
    email: string;
    username: string;
}

export default function RandomCards({ img, name, surname, email, username }: iCards) {
    return (
        <Card>
            <img src={img} alt={`Foto de ${name}`} />
            <div>
                <h3>{`${name} ${surname}`}</h3>
                <p><i className="bx bx-envelope"></i> {email}</p>
                <p><i className='bx bx-id-card'></i> {username}</p>
            </div>
        </Card>
    )
}