import FooterPageLoyaut from '../../ui/loyauts/FooterPageLoyaut';
import GenerateFooterPageContent from '../../ui/GenerateFooterPageContent';
import { useFooterPageContent } from '../../hooks/useFooterPageContent';

export default function PrivacySection() {
  const { footerPageContent, isLoadingFooterPageContent } = useFooterPageContent('privacy');

  return (
    <FooterPageLoyaut heading='Privacy'>
      <p className='mt-4 text-zinc-400'>
        This Privacy Policy ("Policy") outlines how Pizza Time ("Pizza Time," "we," "our," or "us") collects,
        uses, and protects your personal information when you use our Instagram growth services. By using our
        services, you ("you," "your," or "user") consent to the practices described in this Policy.{' '}
      </p>

      <GenerateFooterPageContent
        notFound='privacy'
        items={footerPageContent}
        isLoading={isLoadingFooterPageContent}
      />

      <p className='pb-10 text-zinc-300'>
        If you have any questions or concerns regarding our Privacy Policy, please contact us at
        info@pizzatime.com. Thank you for trusting Pizza Time with your personal information.
      </p>
    </FooterPageLoyaut>
  );
}
