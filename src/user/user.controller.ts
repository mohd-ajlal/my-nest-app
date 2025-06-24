import { Controller, Get } from '@nestjs/common';

@Controller('user') //Decorator - controller decorator
export class UserController {
    @Get() // Decorator - route decorator
    // This method will handle GET requests to /user
    // You can add logic here to retrieve user data
    // For example, you might call a service to get user information
    // and return it as a response.
    getUser(){
        return 'User data retrieved successfully!!!';
    }
}
