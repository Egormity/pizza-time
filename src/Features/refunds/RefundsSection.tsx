import FooterPageLoyaut from '../../ui/loyauts/FooterPageLoyaut';
import GenerateFooterPageContent from '../../ui/GenerateFooterPageContent';
import { useFooterPageContent } from '../../hooks/useFooterPageContent';

export default function PrivacySection() {
  const { footerPageContent, isLoadingFooterPageContent } = useFooterPageContent('privacy');

  return (
    <FooterPageLoyaut heading='Refunds'>
      <p className='mt-4 text-zinc-400'>
        This Refund Policy ("Policy") outlines the terms and conditions for requesting a refund for the
        Instagram growth services provided by Pizza Time ("Pizaa Time," "we," "our," or "us"). By using our
        services, you ("you," "your," or "user") agree to comply with this Policy regarding refund requests.
      </p>

      <GenerateFooterPageContent
        notFound='privacy'
        items={footerPageContent}
        isLoading={isLoadingFooterPageContent}
      />
    </FooterPageLoyaut>
  );
}
