import { useScreenSize } from '../../hooks/useScreenSize';
import AboutArticle from '../../ui/AboutArticle';
import Button from '../../ui/Button';

export default function AboutSection3() {
  const { screenWidth } = useScreenSize();

  return (
    <div className={`max-width-page px-0 max800px:space-y-8 max800px:pt-8`}>
      <div className='grid grid-cols-2 max800px:grid-cols-1'>
        <div className='space-y-4 p-6 max800px:p-4'>
          <AboutArticle cursive='CAREERS' heading='Join the team'>
            Are you passionate about great food, exceptional customer service, and working with a fun and
            dynamic team? If so, we would love to have you join our team at Pizza Time! We are always on the
            lookout for talented and motivated individuals to join our team in a variety of roles, from
            servers and chefs to kitchen staff and management. Whether you're just starting out in the foods
            ervice industry or have years of experience under your belt, we offer a supportive and
            collaborative work environment that encourages personal and professional growth.
          </AboutArticle>
          <Button variation='red'>Join now</Button>
        </div>

        <div>
          <img src='about/office-1.jpeg' alt='Business image 1' className='h-full object-cover' />
        </div>
      </div>

      <div className='grid grid-cols-2 max800px:grid-cols-1'>
        {screenWidth > 800 ? (
          <>
            <Image />
            <Div />
          </>
        ) : (
          <>
            <Div />
            <Image />
          </>
        )}
      </div>
    </div>
  );
}

function Image() {
  return (
    <div>
      <img src='about/office-2.jpeg' alt='Business image 2' className='h-full object-cover' />
    </div>
  );
}

function Div() {
  return (
    <div className='space-y-4 p-6'>
      <AboutArticle cursive='COLLABORATION' heading='Join the business'>
        Whether it's catering for a corporate event, providing lunch for a business meeting, or simply
        offering a delicious meal for employees to enjoy, we are committed to meeting the unique needs of
        businesses in our area. Our menu features a wide range of options, from classic pizzas and salads to
        sandwiches and pasta dishes, so you can be sure there's something for everyone to enjoy. Don't forget,
        Pizza Time is a fictional pizza restaurant made by Ekaterine Mitagvaria.
      </AboutArticle>
      <Button variation='red'>Request a call</Button>
    </div>
  );
}
