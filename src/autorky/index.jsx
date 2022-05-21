import React from 'react';
import Kristyna from '/src/main/foto.Kristyna.jpg';
import Regina from '/src/main/foto.Regina.jpg';

/* TODO: Vložit ke každé autorce fotku, nastylovat, vložit linky s odkazem na Github, při kliknutí "tady" a "zde" */

export const Autorky = () => {
  return (
    <>
      <div className="container">
        <p className="p_autorky">
          {' '}
          Autorky projektu ProDobro jsou Regina a Kristýna. Obě chtěly udělat
          závěrečný projekt, který bude přínosný pro společnost a ideálně bude
          pomáhat jakkoliv znevýhodněným lidem. Proto se rozhodly, že vytvoří
          platformu pro dobročinné aukce.{' '}
        </p>
        <img className="authors_photo" src={Regina} alt="autorka Regina" />
        <p className="p_autorky">
          {' '}
          Regina pochází z Ruska, v Česku žije 3 roky a je maminkou tří dětí.
          Vystudovala právnickou fakultu a nyní pracuje jako dispečerka v
          dopravní společnosti. Když Regi zrovna neprogramuje, tak ráda cestuje,
          čte a učí se nové věci. Její práci můžete sledovat třeba{' '}
          <a className="autorky_odkaz" href="https://github.com/Regi25">
            tady
          </a>
          .
        </p>
        <img className="authors_photo" src={Kristyna} alt="autorka Kristýna" />
        <p className="p_autorky">
          Kristýna teprv nedávno dokončila studium na VŠE a aktuálně pracuje
          jako product development manager v malé kosmetické firmě. Nejradši ze
          všeho plánuje výlety po světě, sleduje bizarní reality shows a vaří
          gluten-free dairy-free dobroty (jo a programuje teď když to trochu
          umí). Její snažení můžete zkouknout{' '}
          <a className="autorky_odkaz" href="https://github.com/kristynyje">
            zde
          </a>
          .
        </p>
      </div>
    </>
  );
};
