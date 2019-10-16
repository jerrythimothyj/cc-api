import { Injectable } from '@nestjs/common';
import { ValidationPipe, BadRequestException, UnprocessableEntityException, ArgumentMetadata } from '@nestjs/common';
import * as R from 'ramda';

@Injectable()
export class ValidationPipe422Service extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      const errors = [];
      function processErrorArray(array) {
        R.map((error: any) => {
         const children = error.children;
         if (children && children.length > 0) {
            return processErrorArray(children);
         }

         const errorObj = R.pipe(
            R.prop(['constraints']),
            R.values,
            R.join(', '),
          )(error);
         errors.push(errorObj);
       })(array);
     }

      processErrorArray(e.message.message);

      if (e instanceof BadRequestException) {
        throw new UnprocessableEntityException(errors);
      }
    }
  }
}
