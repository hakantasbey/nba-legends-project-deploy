// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import Col from "react-bootstrap/Col";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import FormComp from "./FormComp";

const CardContainer = () => {
  //   console.log(data);
  const [search, setSearch] = useState("");
  // console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
    //! setter metodları asenkron olarak çalışır. fonksiyon içinde update edilmiş state'e anlık olarak ulaşamayız
    // console.log(search, "ic");
  };
  // console.log(search, "dis");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <>
      {/* <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        //   onChange={(e)=>console.log(e.target.value)}
        onChange={handleChange}
        type="search"
      /> */}
      <FormComp handleChange={handleChange}/>
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {/* {data.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
           <PlayerCard {...player}/>
           {/* <PlayerCard player={player}/> 
             </Col>
          ))}  */}

          {/* {filteredData.map((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
           <PlayerCard {...player}/>
            </Col>
          ))} */}

          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((player, i) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
