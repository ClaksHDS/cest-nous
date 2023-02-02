import React from "react";
import styled from "styled-components";
/* Component */
import { PageHero } from "../components";
/* Assets */
import logo from "../assets/logo.webp";

const MentionLegalesPage = () => {
  return (
    <main>
      <PageHero title='Mentions Légales'></PageHero>
      <Wrapper className='page'>
        <section className='section-center policy-content'>
          <img src={logo} alt="logo distillerie C'est Nous" />
          <h2>à propos de nous</h2>
          <p>
            Conditions générales de vente des produits vendus sur le site
            internet <a href='www.cestnous-gin.com'>www.cestnous-gin.com</a>
            <br />
            Tous nos produits sont vendus directement par la SAS C’est Nous et
            sont exclusivement réservés aux clients ayant 18 ans révolus.
            <br />
            L’abus d’alcool est dangereux pour la santé. A consommer avec
            modération.
            <br />
            Tous nos produits sont macérés, distillés, embouteillés et étiquetés
            en France et sous autorisation préalable des Douanes Françaises.
          </p>
          <h2>commandes, annulations, remboursements</h2>
          <p>
            Vous disposez d'un délai de rétractation de 14 jours à compter de la
            date de réception de vos produits pour exercer vos droits de
            rétraction sans avoir à vous justifier. Nous nous engageons à vous
            rembourser tous produits non-ouverts et/ou non-abîmés. Cependant,
            les retours sont à effectuer dans leur état d'origine et complet
            (emballage, accessoires, ...). Dans ce cadre, votre responsabilité
            est engagée. N'hésitez pas à nous contacter pour plus de détails
            et/ou si vous avez des questions.
            <br />
            Si malheureusement le produit ne correspond pas à ce que vous
            vouliez, nous vous prions de nous contacter dans les plus brefs
            délais.
            <br />
            Si vous souhaitez annuler votre commande, contactez-nous le plus
            vite possible car si vos produits ont déjà été postés, ils devront
            nous être renvoyer.
            <br />
            Si vous avez bénéficié de la livraison gratuite et demandez le
            remboursement d'un produit non endommagé, le coût de la livraison
            sera déduit du total de la commande.
          </p>
          <h2>livraisons</h2>
          <p>
            Nous travaillons avec plusieurs sociétés de transport/livraison. En
            France, nous utilisons notamment Mondial Relay et nous vous invitons
            à indiquer le nom de votre magasin le plus proche sur le page de
            panier. Si aucun n'est sélectionné, nous vous enverrons l'adresse la
            plus proche possible.
            <br />
            Les dates de livraison sont estimées et non garanties.
          </p>
          <h2>protection des mineurs</h2>
          <p>
            Nos produits et l’utilisation de notre site internet {""}
            <a href='www.cestnous-gin.com'>www.cestnous-gin.com</a> sont
            exclusivement réservés aux personnes ayant 18 ans révolus ou l’âge
            minimal requis pour son pays de domicile. L’alcool est dangereux
            pour la santé. A consommer avec modération.
          </p>
          <h2>prix</h2>
          <p>
            Tous nos prix sont indiqués en € toutes taxes comprises au moment de
            la commande. Nous nous réservons le droit de changer les tarifs,
            ajouter des promotions à tout instant. La SAS C’est Nous se réserve
            le droit de toutes modifications sur le site internet {""}
            <a href='www.cestnous-gin.com'>www.cestnous-gin.com</a>, à tout
            moment et sans préavis.
          </p>
          <h2>mentions relatives à l'utilisation des données personnelles</h2>
          <p>
            Nous recueillons des informations via les commandes, ainsi que par
            les abonnements par e-mail que vous pouvez effectuer. Ces
            informations sont conservées en toute sécurité, et sont utilisées
            uniquement par la Distillerie C'est Nous et à aucun tiers. Il est
            possible de se désinscrire à tout moment en nous envoyant simplement
            un email à{" "}
            <a
              href='mailto:info@cestnous-gin.com'
              title='écrivez-nous par mail'
            >
              info@cestnous-gin.com
            </a>
            <br />
            Nous pouvons également utiliser votre adresse IP pour nous donner
            des informations sur les visites du site. Tout est conforme aux
            législations de l'UE RGDP.
          </p>
          <div className='cie-info'>
            <p>
              SAS C'est Nous
              <br />
              8, rue Pierre Sémard
              <br />
              14550 Blainville sur Orne
              <br />
              <a
                href='mailto:info@cestnous-gin.com'
                title='écrivez-nous par mail'
              >
                info@cestnous-gin.com
              </a>
              <br />
              <a href='www.cestnous-gin.com'>www.cestnous-gin.com</a>
              <br />
              <br />
              SIRET : FR03 821 357 779 00015
              <br />
              Code APE / NAF : 1101Z
              <br />
              <br />
              <i>Dernière mise à jour le 01 October 2020.</i>
            </p>
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

/* Styles */
const Wrapper = styled.main`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .policy-content {
    margin: 3rem auto;
  }
  h2 {
    text-transform: uppercase;
    line-height: 2;
  }
  p {
    line-height: 2;
  }
`;

export default MentionLegalesPage;
