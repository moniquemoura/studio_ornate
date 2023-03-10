import Img1 from "./imgequip/imgs1.jpeg"
import Img2 from "./imgequip/imgs2.jpeg"
import Img3 from "./imgequip/imgs3.jpeg"
import Img4 from "./imgequip/imgs4.jpeg"
import Img5 from "./imgequip/imgs5.jpg"
import React from "react"

export default function Equipe() {
  return (

    <>
      <hr className="featurette-divider" />

      <div className="row featurette p-2 text-white">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Juan Rodrigues <br/><br/><span className="text-muted">Tatuador de tatuagens tradicionais<br/><br/></span></h2>
          <p className="lead">Juan Rodriguez é um tatuador de renome internacional, com mais de 20 anos de experiência no campo. Ele é especializado em tatuagens tradicionais, mas também tem habilidades em tatuagens negras e coloridas. Ele trabalha para o Studio Ornate, um dos estúdios mais conceituados na cidade de São Paulo, onde ele atende clientes de todo o mundo. O Studio Ornate é conhecido por sua equipe altamente qualificada e pelo ambiente acolhedor e profissional que oferece aos seus clientes.</p>
        </div>
        <div className="col-md-5">
          <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img1} alt="img1"  />

        </div>
      </div>
      <hr className="featurette-divider" />

      <div className="row featurette p-2 text-white">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Samantha Smith <br/><br/><span className="text-muted">Tatuadora de Tatuagens minimalistas e geométricas<br/><br/></span></h2>
          <p className="lead">Samantha Smith é uma tatuadora de Nova York que se especializou em tatuagens minimalistas e geométricas. Ela é conhecida por sua precisão e atenção aos detalhes, e tem uma grande seguidora nas redes sociais. Ela trabalha para o Studio Ornate, um estúdio de renome localizado em Manhattan, onde atende clientes regulares e também viaja para convenções de tatuagem. O Studio Ornate é conhecido por sua equipe de tatuadores talentosos e sua paixão pelo trabalho artístico e pelo atendimento ao cliente.</p>
        </div>
        <div className="col-md-5 order-md-1">
        <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img2} alt="img1"  />

        </div>
      </div>
      <hr className="featurette-divider" />

<div className="row featurette p-2 text-white">
  <div className="col-md-7">
    <h2 className="featurette-heading fw-normal lh-1">Michael Johnson <br/><br/><span className="text-muted">Tatuador de tatuagens de animais e natureza <br/><br/></span></h2>
    <p className="lead">Michael Johnson é um tatuador que se especializou em tatuagens de animais e natureza. Ele tem uma paixão por desenhar animais selvagens e criaturas marinhas, e suas tatuagens são conhecidas por serem incrivelmente realistas e detalhadas. Ele trabalha para o Studio Ornate, um estúdio de tatuagem de renome localizado na cidade de Los Angeles. O Studio Ornate é conhecido por sua equipe de tatuadores altamente qualificados e pelo ambiente descontraído e acolhedor que oferece aos seus clientes.</p>
  </div>
  <div className="col-md-5">
  <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img3} alt="img1"  />

  </div>
</div>
<hr className="featurette-divider " />

<div className="row featurette p-2 text-white">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading fw-normal lh-1">Emma Lee <br/><br/><span className="text-muted">Tatuadora de tatuagens de flores e desenhos botânicos <br/><br/></span></h2>
    <p className="lead">Emma Lee é uma tatuadora que se destaca pela sua habilidade em tatuagens de flores e desenhos botânicos. Ela é conhecida por sua habilidade de criar tatuagens que parecem reais e vivas. Ela trabalha para o Studio Ornate, um dos estúdios mais conceituados de Tóquio, onde atende clientes locais e também viaja para convenções de tatuagem. O Studio Ornate é conhecido por sua equipe de tatuadores altamente qualificados e pela atenção aos detalhes e ao atendimento ao cliente.</p>
  </div>
  <div className="col-md-5 order-md-1">
  <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img4} alt="img1"  />

  </div>
</div>
<hr className="featurette-divider" />

      <div className="row featurette p-2 text-white">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1 ">David Brown <br/><br/><span className="text-muted ">Tatuador de tatuagens de estilo old-school <br/><br/></span></h2>
          <p className="lead">David Brown é um tatuador que se especializou em tatuagens de estilo old-school. Ele é conhecido por sua habilidade de criar tatuagens clássicas, como âncoras, pin-ups e tatuagens de marinheiros. Ele trabalha para o Studio Ornate, um dos estúdios de tatuagem mais conceituados de Londres, onde atende clientes regulares e também viaja para convenções de tatuagem. O Studio Ornate é conhecido por sua equipe de tatuadores altamente qualificados e pelo ambiente profissional e acolhedor que oferece aos seus clientes</p>
        </div>
        <div className="col-md-5">
        <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Img5} alt="img1"  />

        </div>
      </div>
    </>
  )
}