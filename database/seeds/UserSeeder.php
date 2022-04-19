<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // system admin entry data
        $admin = new User;
        $admin->name = 'admin';
        $admin->email = 'system@admin.com';
        $admin->password = bcrypt('123456');
        $admin->types = 0;
        $admin->status = 1;
        $admin->save();

        // public user entry data
        $pub_user = new User;
        $pub_user->name = 'Md. Abdul Goni Rabbee';
        $pub_user->email = 'rabbee@gmail.com';
        $pub_user->password = bcrypt('123456');
        $pub_user->types = 1;
        $pub_user->status = 1;
        $pub_user->save();
    }
}
