"use client";

import Image from "next/image";
import React, { useState } from "react";
import { nominees } from "@/db";
import { useParams, useRouter } from "next/navigation";

export default function VoteNominee() {
  const [costPerVote, setCostPerVote] = useState(0.5);
  const [numberOfVotes, setNumberOfVotes] = useState(1);
  const [totalVoteCost, setTotalVoteCost] = useState(0.0);

  const router = useRouter();
  const params = useParams();
  const nominee = nominees.find((nom) => nom.id == params.nominee);

  return (
    <div className="bg-slate-100 py-8 md:py-24">
      <div className="container ">
        <div className=" lg:w-[800px] mx-auto md:flex bg-white drop-shadow-sm">
          <div
            onClick={() => router.push(`/vote/${nominee?.name}`)}
            className="w-full md:w-[40%] border-r border-slate-200 "
          >
            {/* card header */}
            <div className="relative">
              <div className="event-banner h-[130px] overflow-hidden">
                <Image
                  src={require("/public/assets/images/photo_2022-08-07_20-04-24.jpg")}
                  alt="Event Banner"
                />
              </div>
              <div className="user-avatar bg-white w-24 h-24 rounded-full overflow-hidden ring-4 ring-white drop-shadow absolute -bottom-12 left-5">
                <Image
                  src={nominee?.image}
                  alt="User Avatar"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            {/* card body */}
            <div className="p-5 pt-16 text-slate-500">
              <h4 className="text-xl font-semibold text-black">
                {nominee?.name}
              </h4>
              <p className="text-slate-500">
                @{nominee?.name.split(" ")[0].toLocaleLowerCase()}
              </p>

              <h4 className="text-xl font-semibold">
                Ultimate Photo Challenge
              </h4>
              <h4 className="text-xl">
                Category: <span>{nominee?.category}</span>{" "}
              </h4>

              <hr className="my-6" />
              {/* summary */}
              <div className="summary">
                <h2 className="text-xl text-slate-700 font-semibold mb-1.5">
                  Summary
                </h2>
                <h4>Cost Per Vote: GHC {costPerVote}</h4>
                <h4>No. of Votes: {numberOfVotes}</h4>
                <h4 className="font-bold text-slate-700">
                  Total Cost: GHC {costPerVote * numberOfVotes}
                </h4>
              </div>
            </div>
          </div>

          {/* payment section */}
          <div className="payment-form w-full md:w-[60%] px-5 md:px-12 py-4">
            <h3 className="font-bold text-slate-700 text-xl mb-2">Payment</h3>
            <form action="" className="text-slate-600 uppercase text-sm">
              <div className="form-group py-3">
                <label htmlFor="num_votes">Number of Votes</label>
                <input
                  type="number"
                  placeholder="Enter Number of Votes"
                  className="w-full px-4 py-2 outline-none border border-slate-200 rounded text-slate-500"
                  onChange={(e) => setNumberOfVotes(e.target.value)}
                  defaultValue={numberOfVotes}
                />
              </div>
              <div className="form-group py-3">
                <label htmlFor="num_votes">Mobile Network</label>
                <select
                  className="w-full px-4 py-2 outline-none border border-slate-200 rounded text-slate-500 bg-white"
                  name="mobile_network"
                  id=""
                >
                  <option value={null} disabled className="text-slate-400">
                    Select Mobile Network
                  </option>
                  <option value="mtn">MTN</option>
                  <option value="atl">Airtel/Tigo</option>
                  <option value="vod">VodaCash</option>
                </select>
              </div>
              <div className="form-group py-3">
                <label htmlFor="num_votes">Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-2 outline-none border border-slate-200 rounded text-slate-500"
                />
              </div>
              <button className="bg-gradient-to-tr from-secondary-600 to-primary-800 py-2 mt-4 px-3 text-white rounded  ">
                Pay Now
              </button>

              <div className="payment-methods">
                <Image
                  src={require("/public/assets/images/payment-methods.png")}
                  alt="payment methods"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
