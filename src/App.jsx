import { getImageUrl } from "./utils.js";
import Profile from "./components/Profile.jsx";

export default function Gallery(props) {
  return (
    <div>
      {/* <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */}
      <Profile title="Notable Scientists"/>
      <Profile
        className="avatar"
        src={getImageUrl("szV5sdG", "b")}
        alt="Maria Skłodowska-Curie"
        width={470}
        height={470}
        name="Maria Skłodowska-Curie"
        professionTitle={<b>Profession: </b>}
        profession="physicist and chemist"
        numOfAwards="4"
        awardsTitle="Awards: "
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="Discovered: "
        plutonium="plutonium"
      />

      <Profile
        className="avatar"
        src={getImageUrl("YfeOqp2", "b")}
        alt="Katsuko Saruhashi"
        width={470}
        height={470}
        name="Katsuko Saruhashi"
        professionTitle={<b>Profession: </b>}
        profession="geochemist"
        numOfAwards="2"
        awardsTitle="Awards: "
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="Discovered: "
        plutonium="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
