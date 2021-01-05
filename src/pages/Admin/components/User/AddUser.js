import Plus from '../../../../assets/img/admin/add.svg'

export default function AddUser({
  valueEmail,
  valueFullname,
  valuerole,
  valuenewpassword,
  handleSubmit,
  onChange,
}) {
  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Add<span className="font-normal ml-2">User</span>
        </p>
      </div>
      <input
        className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
        placeholder="User Email"
        value={valueEmail}
        onChange={onChange}
        name="email"
      />
      <input
        className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
        placeholder="Fullname"
        value={valueFullname}
        onChange={onChange}
        name="fullname"
      />

      <select
        className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-400 focus:outline-none"
        value={valuerole}
        onChange={onChange}
        name="role"
      >
        <option>Pilih Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <input
        className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
        placeholder="New Password"
        value={valuenewpassword}
        onChange={onChange}
        name="newpassword"
        type="password"
      />

      <button
        className="mt-3 p-2 bg-green-500 flex items-center text-white focus:outline-none w-full justify-center rounded-md"
        onClick={handleSubmit}
      >
        <img src={Plus} />
        <p className="font-bold text-md pl-3">Add User</p>
      </button>
    </div>
  )
}
