import Birthday from "./birthday";
import { useState } from "react";


const BirthdayList = () => {

  const [birthdays, setBirthday] = useState([
    {
      id: 1,
      name: 'Monkey D. kiwi',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Jason Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Johnson',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Portgas D. faith',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ]);

  return (
      <div className="birthdayList">
        <h2>birthdays!!</h2>
        {
          birthdays.map((birthday) => (
            <Birthday
              id={birthday.id}
              image={birthday.image}
              name={birthday.name}
              age={birthday.age}
            />
          ))
        }
      </div>
  );
}

export default BirthdayList;