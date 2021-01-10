import { container } from 'tsyringe';
import mailconfig from '@config/mail';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import EtherealEmailProvider from '@shared/container/providers/MailProvider/implementations/EtherealEmailProvider';
import SESEmailProvider from '@shared/container/providers/MailProvider/implementations/SESEmailProvider';

import IMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
  );

  container.registerInstance<IMailProvider>(
    'MailProvider',
    mailconfig.driver === 'ethereal'
    ? container.resolve(EtherealEmailProvider)
    : container.resolve(SESEmailProvider),
  );
