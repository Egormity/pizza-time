import FooterPageLoyaut from '../../ui/loyauts/FooterPageLoyaut';
import GenerateFooterPageContent from '../../ui/GenerateFooterPageContent';
import { useFooterPageContent } from '../../hooks/useFooterPageContent';

export default function PrivacySection() {
  const { footerPageContent, isLoadingFooterPageContent } = useFooterPageContent('privacy');

  return (
    <FooterPageLoyaut heading='Terms'>
      <p className='mt-4 text-zinc-400'>
        Welcome to Pizza Time. These Terms of Service outline the rules and guidelines for using our website
        and services. By accessing or using our website, you agree to abide by these terms. Please read them
        carefully before proceeding.
      </p>

      <GenerateFooterPageContent
        notFound='privacy'
        items={footerPageContent}
        isLoading={isLoadingFooterPageContent}
      />
    </FooterPageLoyaut>
  );
}
