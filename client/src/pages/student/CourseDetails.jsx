import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets, dummyEducatorData } from '../../assets/img/assets';
import humanizeDuration from 'humanize-duration';
import Footer from '../../components/student/Footer';
import YouTube from 'react-youtube';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const {
    allCourses,
    calculateChapterTime,
    currency,
    calculateCourseDuration,
    calculateTotalLectures,
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => {
      return course._id === id;
    });
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpenSections((prev) => {
      return {
        ...prev,
        [index]: !prev[index],
      };
    });
  };
  return courseData ? (
    <>
      <div
        className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36
    px-8 md:pt-30 pt-20 text-left"
      >
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-100/70"></div>
        {/* left-column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="md:text-4xl text-2xl font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>
          <div className="flex items-center space-x-2 mt-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <img
                  className="h-3"
                  key={i}
                  src={
                    i < Math.floor(courseData.rating)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="star"
                />
              ))}
            </div>
            <p className="text-gray-500 mr-3 ">
              {Math.floor(Math.random() * (900 - 500 + 1)) + 500}{' '}
              <span className="ml-1 text-gray-500">Student</span>
            </p>
          </div>
          <div className="flex">
            <span className="mr-2">Course by </span>
            <p className="text-blue-700 underline cursor-pointer">
              {dummyEducatorData.name}
            </p>
          </div>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => {
                return (
                  <div
                    key={index}
                    className="border border-r-gray-300 bg-white mb-2 rounded"
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          className={`transform transition-transform ${
                            openSections[index] ? 'rotate-180' : ''
                          }`}
                          src={assets.down_arrow_icon}
                          alt="down_arrow_icon"
                        />
                        <p className="font-medium md:text-base tex-sm">
                          {chapter.chapterTitle}
                        </p>
                      </div>
                      <p className="text-sm md:text-base">
                        {chapter.chapterContent.length} lecture -
                        {calculateChapterTime(chapter)}
                      </p>
                    </div>
                    <div
                      className={`overflow-hidden transform transition-all duration-[300ms] ease-in-out ${
                        openSections[index]
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300">
                        {chapter.chapterContent.map((lecture, i) => {
                          return (
                            <li key={i} className="flex gap-2 py-2 ">
                              <img
                                src={assets.play_icon}
                                alt="play_icon"
                                className="w-4 h-4 mt-1"
                              />
                              <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-base">
                                <p>{lecture.lectureTitle}</p>
                                <div className="flex gap-2">
                                  {lecture.isPreviewFree && (
                                    <p
                                      onClick={() =>
                                        setPlayerData({
                                          videoId: lecture.lectureUrl
                                            .split('/')
                                            .pop(),
                                        })
                                      }
                                      className="text-blue-500 cursor-pointer"
                                    >
                                      Preview
                                    </p>
                                  )}
                                  <p>
                                    {humanizeDuration(
                                      lecture.lectureDuration * 60 * 1000,
                                      { units: ['h', 'm'] }
                                    )}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-md:text-base text-sm pt-10">
            <h3 className="text-xl font-semibold text-gray-800 pb-3">
              Course Description
            </h3>
            <p
              className="pt-3 text-base font-sans text-gray-500 space-y-4 [&>h2]:text-gray-800 [&>h2]:font-semibold [&>ul]:list-disc [&>ul]:pl-5"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
            ></p>
          </div>
        </div>
        {/* right column */}
        <div className="max-w-[424px] z-10 shadow-lg rounded overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          {playerData ? (
            <YouTube
              videoId={playerData.videoId}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData.courseThumbnail} />
          )}
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                src={assets.time_clock_icon}
                alt="time_clock_icon"
                className="w-3.5"
              />
              <p className="text-red-500 font-medium">
                5 day left at this price!
              </p>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-800 md:text-4xl text-2xl font-semibold">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}{' '}
              </p>
              <p className="md:text-lg text-gray-500 line-through">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="md:text-lg text-gray-500">
                {courseData.discount}% off
              </p>
            </div>
            <div className="flex items-center text-sm md:text-base gap-4 pt-2 md:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img className="h-4" src={assets.star} alt="star" />
                <span className="text-gray-600 text-lg font-medium">
                  {courseData.rating}
                </span>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time_clock_icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="time_clock_icon" />
                <p>{calculateTotalLectures(courseData)} lesson</p>
              </div>
            </div>
            <button className="md:mt-6 mt-4 py-3 rounded bg-blue-600 text-white font-medium w-full hover:opacity-90">
              Enroll Now
            </button>
            <div className="pt-6">
              <p className="md:text-xl text-lg text-gray-800 font-medium">
                What's in the course?
              </p>
              <ul className="ml-4 list-disc text-sm md-text-base pt-2 text-gray-500">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
