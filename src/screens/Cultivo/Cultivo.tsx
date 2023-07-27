import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {ReactNode} from 'react';
import {FC} from 'react';

import {Text, View} from 'react-native';
import {DrawerParamList} from '../../types/screens';
export type DrawerScreenProp = NativeStackScreenProps<
  DrawerParamList,
  'Cultivos'
>;
type Data = {
  [key: string]: React.FC;
};
import {Agave} from '../../components/molecules/Cultivos/Agave/Agave';
import {Aguacate} from '../../components/molecules/Cultivos/Agave/Aguacate';
import {Alfalfa} from '../../components/molecules/Cultivos/Agave/Alfalfa';
import {Apio} from '../../components/molecules/Cultivos/Agave/Apio';
import {Arroz} from '../../components/molecules/Cultivos/Agave/Arroz';
import {Ajo} from '../../components/molecules/Cultivos/Agave/Ajo';
import {Banano} from '../../components/molecules/Cultivos/Agave/Banano';
import {Berries} from '../../components/molecules/Cultivos/Agave/Berries';
import {Brocoli} from '../../components/molecules/Cultivos/Agave/Brocoli';
import {Cafe} from '../../components/molecules/Cultivos/Agave/Cafe';
import {Calabaza} from '../../components/molecules/Cultivos/Agave/Calabaza';
import {Cana} from '../../components/molecules/Cultivos/Agave/Cana';
import {Cebolla} from '../../components/molecules/Cultivos/Agave/Cebolla';
import {Chiles} from '../../components/molecules/Cultivos/Agave/Chiles';
import {Esparragos} from '../../components/molecules/Cultivos/Agave/Esparragos';
import {Fresa} from '../../components/molecules/Cultivos/Agave/Fresa';
import {Frijol} from '../../components/molecules/Cultivos/Agave/Frijol';
import {Limon} from '../../components/molecules/Cultivos/Agave/Limon';
import {Maiz} from '../../components/molecules/Cultivos/Agave/Maiz';
import {Mango} from '../../components/molecules/Cultivos/Agave/Mango';
import {Manzana} from '../../components/molecules/Cultivos/Agave/Manzana';
import {Melon} from '../../components/molecules/Cultivos/Agave/Melon';
import {Naranja} from '../../components/molecules/Cultivos/Agave/Naranja';
import {Nogal} from '../../components/molecules/Cultivos/Agave/Nogal';
import {Ornamentales} from '../../components/molecules/Cultivos/Agave/Ornamentales';
import {Papa} from '../../components/molecules/Cultivos/Agave/Papa';
import {Papaya} from '../../components/molecules/Cultivos/Agave/Papaya';
import {Pepino} from '../../components/molecules/Cultivos/Agave/Pepino';
import {Pina} from '../../components/molecules/Cultivos/Agave/Pina';
import {Sandia} from '../../components/molecules/Cultivos/Agave/Sandia';
import {Tomate} from '../../components/molecules/Cultivos/Agave/Tomate';
import {Trigo} from '../../components/molecules/Cultivos/Agave/Trigo';
import {Uva} from '../../components/molecules/Cultivos/Agave/Uva';
import {Zanahoria} from '../../components/molecules/Cultivos/Agave/Zanahoria';

const AgaveText = () => <Agave></Agave>;
const AguacateText = () => <Aguacate></Aguacate>;
const AlfalfaText = () => <Alfalfa></Alfalfa>;
const ApioText = () => <Apio></Apio>;
const ArrozText = () => <Arroz />;
const BananoText = () => <Banano />;
const AjoText = () => <Ajo />;
const BerriesText = () => <Berries />;
const Brocolitext = () => <Brocoli />;
const CafeText = () => <Cafe />;
const CalabazaText = () => <Calabaza />;
const CanaText = () => <Cana />;
const CebollaText = () => <Cebolla />;
const ChilesText = () => <Chiles />;
const Esparragostext = () => <Esparragos />;
const FresaText = () => <Fresa />;
const FrijolText = () => <Frijol />;
const LimonText = () => <Limon />;
const MaizText = () => <Maiz />;
const MangoText = () => <Mango />;
const ManzanaText = () => <Manzana />;
const MelonText = () => <Melon />;
const NaranjaText = () => <Naranja />;
const NogalText = () => <Nogal />;
const OrnamentalesText = () => <Ornamentales />;
const PapaText = () => <Papa />;
const PapayaText = () => <Papaya />;
const PepinoText = () => <Pepino />;
const PinaText = () => <Pina />;
const SandiaText = () => <Sandia />;
const TomateText = () => <Tomate />;
const TrigoText = () => <Trigo />;
const UvaText = () => <Uva />;
const ZanahoriaText = () => <Zanahoria />;

export const Cultivo: FC<DrawerScreenProp> = props => {
  const data: Data = {
    Agave: AgaveText,
    Aguacate: AguacateText,
    Ajo: AjoText,
    Alfalfa: AlfalfaText,
    'Apio, Espinaca, Lechuga': ApioText,
    Arroz: ArrozText,
    Banano: BananoText,
    Berries: BerriesText,
    Brócoli: Brocolitext,
    Café: CafeText,
    Calabaza: CalabazaText,
    Caña: CanaText,
    Cebolla: CebollaText,
    Chiles: ChilesText,
    Espárrago: Esparragostext,
    Fresa: FresaText,
    'Frijol, Soya y Garbanzo': FrijolText,
    Limón: LimonText,
    Maíz: MaizText,
    Mango: MangoText,
    Manzana: ManzanaText,
    Melon: MelonText,
    Naranja: NaranjaText,
    Nogal: NogalText,
    Ornamentales: OrnamentalesText,
    Papa: PapaText,
    Papaya: PapayaText,
    Pepino: PepinoText,
    Piña: PinaText,
    Sandía: SandiaText,
    Tomate: TomateText,
    Trigo: TrigoText,
    Uva: UvaText,
    Zanahoria: ZanahoriaText,
  };

  const Componente = data[props.route.params.params.cultivo];
  return (
    <View style={{backgroundColor: 'white'}}>
      {Componente && <Componente />}
    </View>
  );
};
