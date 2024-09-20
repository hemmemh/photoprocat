import { useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import AccordionUser from '../../components/UI/accordionUser/AccordionUser';
import AccordionUserItem from '../../components/UI/accordionUser/AccordionUserItem';
import SliderSort from '../../entities/sliderSort/SliderSort';
import PriceSort from '../../entities/priceSort/PriceSort';
import RadioGroup from '../../entities/radioGroup/RadioGroup';
import cls from './filterMobile.module.scss';
import Button2 from '../../components/UI/button2/Button2';
import CheckBoxGroup from '../../entities/checkBoxGroup/CheckBoxGroup';
import { isStringArray } from '../../utils/guards/guards';

export const FilterMobile = () => {
  const [VisibleAccordionFiltr] = useState(false);
  const { typeInformation, informations } = useAppSelector(
    (state) => state.reducer.catalog
  );

  return (
    <div className={cls.filterAccordion}>
      {typeInformation && (
        <AccordionUser>
          <AccordionUserItem>
            <Button2 className={cls.sortButton}>Фильтры</Button2>
            <AccordionUser VisibleAll={VisibleAccordionFiltr}>
              {Object.entries(typeInformation).map((el) => {
                const type = el[1];
                const typeName = el[0];

                let arr = [
                  ...informations
                    .filter((fil) => fil.name == typeName)
                    .map((ee) => ee.description),
                ];
                arr = arr.filter((fil, pos) => arr.indexOf(fil) === pos);

                if (type == 'radio' && isStringArray(arr as string[])) {
                  return (
                    <AccordionUserItem key={typeName}>
                      <Button2 className={cls.sortButton}>{typeName}</Button2>
                      <RadioGroup typeName={typeName} arr={arr as string[]} />
                    </AccordionUserItem>
                  );
                }

                if (type == 'check' && isStringArray(arr as string[])) {
                  return (
                    <AccordionUserItem key={typeName}>
                      <Button2 className={cls.sortButton}>{typeName}</Button2>
                      <CheckBoxGroup
                        typeName={typeName}
                        arr={arr as string[]}
                      />
                    </AccordionUserItem>
                  );
                }

                if (type == 'slider') {
                  return (
                    <AccordionUserItem key={typeName}>
                      <Button2 className={cls.sortButton}>{typeName}</Button2>
                      <SliderSort typeName={typeName} arr={arr as string[]} />
                    </AccordionUserItem>
                  );
                }

                return <></>;
              })}
              <AccordionUserItem>
                <Button2 className={cls.sortButton}>цена</Button2>
                <PriceSort />
              </AccordionUserItem>
            </AccordionUser>
          </AccordionUserItem>
        </AccordionUser>
      )}
    </div>
  );
};
