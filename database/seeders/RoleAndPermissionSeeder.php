<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'create-branch']);
        Permission::create(['name' => 'edit-branch']);
        Permission::create(['name' => 'delete-branch']);
        Permission::create(['name' => 'create-course']);
        Permission::create(['name' => 'edit-course']);
        Permission::create(['name' => 'delete-course']);
        Permission::create(['name' => 'create-agent']);
        Permission::create(['name' => 'edit-agent']);
        Permission::create(['name' => 'delete-agent']);
        Permission::create(['name' => 'create-student']);
        Permission::create(['name' => 'edit-student']);
        Permission::create(['name' => 'delete-student']);
        Permission::create(['name' => 'create-admission']);
        Permission::create(['name' => 'edit-admission']);
        Permission::create(['name' => 'delete-admission']);
        Permission::create(['name' => 'view-certificate']);
        Permission::create(['name' => 'create-enquiry']);

        $adminRole = Role::create(['name' => 'Admin']);
        $branchdirectorRole = Role::create(['name' => 'Branch Director']);
        $branchmanagerRole = Role::create(['name' => 'Branch Manager']);
        $studentRole = Role::create(['name' => 'Student']);
        $adminRole->givePermissionTo([
            'create-branch',
            'edit-branch',
            'delete-branch',
            'create-course',
            'edit-course',
            'delete-course',
            'create-agent',
            'edit-agent',
            'delete-agent',
            'create-student',
            'edit-student',
            'delete-student',
            'create-admission',
            'edit-admission',
            'delete-admission'
        ]);
        $branchdirectorRole->givePermissionTo([
            'create-course',
            'create-student',
            'create-enquiry',
            'create-admission',
        ]);
        $branchmanagerRole->givePermissionTo([
            'create-student',
            'create-enquiry',
            'create-admission',
        ]);
        $studentRole->givePermissionTo([
            'view-certificate',
        ]);
    }
}
