import React from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import useEmblaCarousel from 'embla-carousel-react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "./EmbaCarouselArrowButtons"

/* components */
import ProblemRecord from '@/components/ProblemRecord';
import Typography from '@mui/joy/Typography';

const ListProblemsRecords:React.FC = () => {

  const { problems, error} = useTypedSelector(state => state.problem);
  const options  = { direction: 'rtl', loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  return (
    <section className="section-problem">
      <Typography
        color="neutral"
        level="h2"
        variant="plain">
        Основные направления:
      </Typography>
      <section className="embla" dir="rtl">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {problems.map(item =>
              <ProblemRecord key={item._id} record={item} />,
            )}
          </div>

        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </section>
    </section>
  )
}
export default ListProblemsRecords;