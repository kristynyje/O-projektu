import React from 'react';
import Logo from './logo.png';

export const Projekt = () => {
  return (
    <>
      <div className="container">
        <p className="logo_ProDobro"> ProDobro</p>
        <h2>Jednoduchá platforma pro online dobročinné aukce ProDobro</h2>
        <p>
          Naše platforma bude sloužit k rychlému vytvoření a správě dobročinných
          aukcí. Chceme, aby stránky byly přehledné, intuitivní, aby aukci
          zvládla s přehledem zadat třeba i naše babička. Věnovat se budeme
          zejména samotnému průběhu aukce, který bude interaktivní, uživatelé
          budou moci přidávat komentáře, emojis atd.{' '}
        </p>

        <p>
          Uživatel na titulní straně klikne na "založit aukci", bude vyzván k
          prihlášení přes Google, potom vyplní formulář, který bude požadovat,
          aby vyplnil název aukce, popíše příběh, přidá fotografie předmětu i ty
          ve vztahu k danému příbehu, přidá vyvolávací cenu aj. a aukci založí.
          Odkazy na svou aukci může dále sdílet se svými přáteli, rodinou,
          známými či kolegy, dostanou se k ní pouze ti, kteří získali tento
          link.
        </p>
      </div>
    </>
  );
};
