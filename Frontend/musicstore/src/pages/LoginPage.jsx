import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon, UserIcon} from "@heroicons/react/outline";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "bookstoreadmin" && password === "ManageBook68") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/store-manager/all-book");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-50"
    >
      <div
        className="w-full max-w-md bg-white/95 backdrop-blur rounded-3xl
        border border-blue-100 shadow-[0_18px_45px_rgba(15,23,42,0.18)]
        overflow-hidden"
      >

        <div className="relative w-full flex flex-col items-center justify-center pt-8 pb-4">
          <span className="absolute left-8 top-4 text-lg text-blue-300/50">♬</span>
          <span className="absolute right-10 top-8 text-base text-pink-300/60 rotate-12">♪</span>
          <span className="absolute left-14 bottom-2 text-sm text-amber-300/60 -rotate-6">♫</span>

          <div className="flex items-center justify-center border border-white/60">
          </div>

          <h2 className="mt-3 text-lg font-semibold text-yellow-500 tracking-wide">
            HarmonyLab
          </h2>

     
          <p className="text-[11px] text-slate-500 mt-1 border-b border-slate-300 pb-0.5 px-2">
            Backoffice
          </p>
        </div>

        {/* FORM SECTION */}
        <div className="px-8 py-7">
          <p className="text-xs text-center text-slate-500 mb-5">
            สำหรับผู้ดูแลระบบเท่านั้น
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 text-xs rounded-lg">
                {error}
              </div>
            )}

            {/* USERNAME */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                ชื่อผู้ใช้
              </label>
              <div className="relative">
                <UserIcon className="absolute inset-y-0 left-0 h-4 w-4 text-slate-400 ml-3 mt-2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2.5 rounded-full border border-slate-200
                    text-sm bg-slate-50/70
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="กรอกชื่อผู้ใช้"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                รหัสผ่าน
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute inset-y-0 left-0 h-4 w-4 text-slate-400 ml-3 mt-2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2.5 rounded-full border border-slate-200
                    text-sm bg-slate-50/70
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  placeholder="กรอกรหัสผ่าน"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-2 py-2.5 rounded-full text-sm font-semibold 
                text-blue-800 bg-sky-400 border
                hover:bg-pink-400 transition-colors
                shadow-md hover:shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
            >
              Log in
            </button>
          </form>

          {/* BACK LINK */}
          <div className="mt-5 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-blue-500 transition"
            >
              <span>←</span>
              <span>กลับสู่หน้าแรก</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
