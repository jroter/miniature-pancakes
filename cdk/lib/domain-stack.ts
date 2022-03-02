import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export class DomainStack extends Stack {
    readonly websiteHostedZone: route53.IHostedZone;
    readonly apiHostedZone: route53.PublicHostedZone;
    readonly domainCert: acm.Certificate;

    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);
      const zoneName = "uwb-css-startup.com"
      // We are telling route53 that we have this domain which is public
      this.websiteHostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(this, 'websiteHostedZone', {
        hostedZoneId: "Z06018963CPE73BSO543X",
        zoneName
      })
      //This builds a domain for my express server 
      this.apiHostedZone = new route53.PublicHostedZone(this, 'apiHostedZone', {
        zoneName: `api.${zoneName}`
      });
      //associated the api domain back to the base domain
      //api.uwbstartup is now okay!
      const nsRecords = new route53.NsRecord(this, 'apiHostedZoneNSRecord', {
        zone: this.websiteHostedZone, 
        recordName: 'api',
        values: this.apiHostedZone.hostedZoneNameServers ? this.apiHostedZone.hostedZoneNameServers : [],
      })
      //Ontop of that, we create a new certificate which is associated with the domain
      //So we can support https for the domain
      this.domainCert = new acm.DnsValidatedCertificate(this, 'websiteCertificate', {
        domainName: zoneName,
        subjectAlternativeNames: [`api.${zoneName}`],
        hostedZone: this.websiteHostedZone,
        region: 'us-east-1'
      });
      //makes the domainCert start after the nsRecords have completed
      this.domainCert.node.addDependency(nsRecords);
    }
  }
  