import '../styles/exercise1.css';

function exercise1(props) {
  const { data } = props;

  const getCity = (cityId) => {
    const city = data.cities.find((e) => e.city_id === cityId);
    return city ? city.cityName : '';
  };

  const getCountry = (cityId) => {
    const city = data.cities.find((e) => e.city_id === cityId);
    const country = data.countries.find(
      (e) => e.country_id === city.country_id
    );
    return country ? country.countryName : '';
  };

  const getStudies = (studyId) => {
    const study = data.studies.find((e) => e.study_id === studyId);
    return study ? study.level : '-';
  };

  const getGender = (genderId) => {
    const gender = data.gender.find((e) => e.gender_id === genderId);
    return gender ? gender.type : '';
  };

  const getBloodType = (bloodTypeId) => {
    const bloodType = data.bloodType.find(
      (e) => e.bloodType_id === bloodTypeId
    );
    return bloodType ? bloodType.bloodName : '';
  };

  const renderUserTable = () => {
    return data.people.map((person) => {
      return (
        <>
          <tr>
            <td>{person.name}</td>
            <td>{person.surname1}</td>
            <td>{person.age}</td>
            <td>{person.height}</td>
            <td>{person.weight}</td>
            <td>{getCity(person.city_id)}</td>
            <td>{getCountry(person.city_id)}</td>
            <td>{getStudies(person.study_id)}</td>
            <td>{getGender(person.gender_id)}</td>
            <td>{getBloodType(person.bloodtype_id)}</td>
          </tr>
        </>
      );
    });
  };
  return (
    <>
      <h1>Ejercicio 1</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Ciudad</th>
            <th>País</th>
            <th>Estudios</th>
            <th>Género</th>
            <th>Grupo Sanguíneo</th>
          </tr>
        </thead>
        <tbody>{renderUserTable()}</tbody>
      </table>
    </>
  );
}

export default exercise1;
