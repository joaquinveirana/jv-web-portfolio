'use client';

import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import { ExperienceProps, JobExperience } from '@/app/props/ExperienceProps';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';

/* 
  --- Styles ---
*/
const sectionContentClass =
  'md:flex-row-centered md:items-start flex-col-centered w-full';
const tabListContainerClass = 'md:pt-6 md:w-1/5 pt-2 w-full flex-row-centered';
const tabListStyles = {
  '.MuiTabs-indicator': {
    left: 0,
    width: '3px',
    backgroundColor: '#34bbff',
  },
  '& .Mui-selected': { color: '#34bbff' },
};
const tabListItemClass =
  'md:border-l-[3px] md:border-b-0 text-light-200 transition-all-eio-300 hover:text-cyan-600 hover:bg-dark-500 border-solid border-b-[3px] border-dark-500';
const tabPanelContainerClass = 'md:w-4/5 md:p-4 pt-6';

export const Experience = (props: ExperienceProps) => {
  /* 
    Hooks
  */
  const [tabValue, setTabValue] = useState(0);
  const [tabListVerticalOrientation, setTablistVerticalOrientation] =
    useState(false);
  useEffect(() => {
    const tabListOrientationChange = () => {
      if (window.innerWidth > 768) setTablistVerticalOrientation(true);
      else setTablistVerticalOrientation(false);
    };
    tabListOrientationChange();
    window.addEventListener('resize', tabListOrientationChange);
    return () => {
      window.removeEventListener('resize', tabListOrientationChange);
    };
  });

  return (
    <article id='#about' className='article-class'>
      {/* Title */}
      <SectionTitle
        title={props.textContent.title}
        growTimeout={1500}
        scrollThreshold={100}
        growOneTime={true}
      />

      <div className={sectionContentClass}>
        {/* TabList of Companies */}
        <div className={tabListContainerClass}>
          <Tabs
            aria-label={props.textContent.aria.panel}
            onChange={(event: React.SyntheticEvent, newValue: number) =>
              setTabValue(newValue)
            }
            orientation={tabListVerticalOrientation ? 'vertical' : 'horizontal'}
            sx={tabListStyles}
            value={tabValue}
            variant='scrollable'
          >
            {props.textContent.jobs.map((job: JobExperience, index: number) => {
              return (
                <Tab
                  aria-controls={`${props.textContent.aria.tab}-${index}`}
                  className={tabListItemClass}
                  key={index}
                  label={job.companyShortName}
                />
              );
            })}
          </Tabs>
        </div>

        {/* TabPanel with company content */}
        <div className={tabPanelContainerClass}>
          {props.textContent.jobs.map((job: JobExperience, index: number) => {
            return (
              <div
                key={index}
                className={`${tabValue === index ? 'block' : 'hidden'}`}
              >
                <h1 className='subtitle-class'>
                  {job.position} @ {job.company}
                </h1>
                <h6 className='pb-2 secondary-sub-paragraph-class'>
                  {job.startDate} - {job.endDate}
                </h6>
                {job.keyPoints.map((keyPoint: string, index: number) => {
                  return (
                    <div key={index} className='py-2 flex items-start'>
                      <span className='text-cyan-600'>&#9724;</span>
                      <p className='text-base pl-2 paragraph-class'>
                        {keyPoint}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
