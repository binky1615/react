import Birthday from "./birthday";
import { useState } from "react";


const BirthdayList = () => {

  const [birthdays, setBirthday] = useState([
    {
      id: 1,
      name: 'Monkey D. kiwi',
      age: 19,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Clou D. Pete',
      age: 85,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Marshall D. Jason',
      age: 40,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Netafari D. Gwen',
      age: 18,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Portgas D. Faith',
      age: 19,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ]);

  return (
    <div className="birthdayList">
      <h2>Birthdays of the D!!</h2>
      {
       birthdays && birthdays.map((birthday) => (
          <Birthday
            id={birthday.id}
            image={birthday.image}
            name={birthday.name}
            age={birthday.age}
          />
        ))
      }
      <button onClick={() => setBirthday("")}>
        Remove All
      </button>
    </div>
  );
}

export default BirthdayList;