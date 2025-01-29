@extends('backend.layouts.master')
@section('title','Branch | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Branch</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Branch</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-12"></div>
            <div class="col-sm-8 col-12 text-right add-btn-col">
                <a href="{{route('branches.create')}}" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus"></i> Add Branch</a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div>
                        <div class="card-body">
                            <div class="table-responsiveness">
                                <table class="table custom-table DataTable" style="width: 100%;">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Address</th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($branch as $key=>$item)
                                        <tr>
                                            <td>{{++$key}}</td>
                                            <td>{{$item->branch_name}}</td>
                                            <td>{{$item->branch_email}}</td>
                                            <td>{{$item->branch_mobile}}</td>
                                            <td>{{$item->branch_address}}</td>
                                            <td class="text-right">
                                                <div class="dropdown-action">
                                                    <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item add-manager-btn" href="" data-branch_id="{{$item->id}}" data-toggle="modal" data-target="#add_manager"><i class="fas fa-user m-r-5"></i> Add Manager</a>
                                                        <a class="dropdown-item" href="{{route('Branch-Fee',$item->id)}}"><i class="fas fa-pencil-alt m-r-5"></i> Update Fee</a>
                                                        <a class="dropdown-item" href="{{route('branches.edit',$item->id)}}"><i class="fas fa-pencil-alt m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" href="{{route('branches.show',$item->id)}}"><i class="fas fa-eye m-r-5"></i> View</a>
                                                        <form action="{{ route('branches.destroy', $item->id) }}" method="POST" class="d-inline">
                                                            @csrf
                                                            @method('delete')
                                                            <button type="submit" class="dropdown-item"><i class="fas fa-trash-alt m-r-5"></i> Delete</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal custom-modal fade" id="add_manager">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Branch Manager</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <form action="{{route('Manager.Store')}}" method="post" id="add_manager_form">
                    @csrf
                    <input type="hidden" id="branch_id" name="branch_id">
                    <div class="form-group">
                        <label>Manager Name <span class="text-danger">*</span></label>
                        <input class="form-control form-white" placeholder="Enter Name" type="text" name="name">
                        <span class="text-danger" id="manager_name_error"></span>
                    </div>
                    <div class="form-group">
                        <label>Manager Email <span class="text-danger">*</span></label>
                        <input class="form-control form-white" placeholder="Enter Email" type="text" name="email">
                        <span class="text-danger" id="manager_email_error"></span>
                    </div>
                    <div class="form-group">
                        <label>Manager Mobile No <span class="text-danger">*</span><span class="text-danger">Used as password</span></label>
                        <input class="form-control form-white" placeholder="Enter Mobile No" type="text" name="mobile">
                        <span class="text-danger" id="manager_mobile"></span>
                    </div>
                    <div class="submit-section text-center">
                        <button type="submit" class="btn btn-primary save-category submit-btn">Save</button>
                        <button type="button" class="btn btn-danger" onclick="cancelForm()">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
    $(document).ready(function() {
        $('.add-manager-btn').on('click', function(event) {
            event.preventDefault();
            var branchId = $(this).data('branch_id');
            $('#branch_id').val(branchId);
        });
        // AJAX request for creating category
        $('#add_manager_form').on('submit', function(event) {
            event.preventDefault();
            $.ajax({
                url: $(this).attr('action'),
                method: 'POST',
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function(response) {
                    if (response.errors) {
                        // Display validation errors
                        if (response.errors.name) {
                            document.getElementById("manager_name_error").innerText = response.errors.name[0];
                        } else {
                            document.getElementById("manager_name_error").innerText = '';
                        }
                        if (response.errors.email) {
                            document.getElementById("manager_email_error").innerText = response.errors.email[0];
                        } else {
                            document.getElementById("manager_email_error").innerText = '';
                        }
                    } else if (response.success) {
                        // If no errors, reset form and close modal
                        document.getElementById("add_manager_form").reset();
                        $('#add_manager').modal('hide');
                        // Clear error messages
                        document.getElementById("manager_name_error").innerText = '';
                        document.getElementById("manager_email_error").innerText = '';
                        // Show success message if needed
                        successMsg(response.success);
                        location.reload();
                    }
                },
                error: function(xhr, status, error) {
                    errorMsg(xhr.responseText);
                }
            });
        });
    });

    function cancelForm() {
        document.getElementById("add_manager_form").reset();
        $('#add_manager').modal('hide');
        document.getElementById("category_name_error").innerText = '';
        document.getElementById("category_image_error").innerText = '';
    }
</script>
@endsection